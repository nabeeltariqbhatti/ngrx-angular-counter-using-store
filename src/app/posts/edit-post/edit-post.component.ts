import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/store/app.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/posts.model';
import { getPostById } from '../posts-list/state/post.selector';
import { Subscription } from 'rxjs';
import { updatePost } from '../posts-list/state/post.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
post:Post;
postForm: FormGroup
postSubscription: Subscription


   constructor(private route:ActivatedRoute,private store:Store<Appstate>, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    
     const id=params.get('id')
     this.store.select(
       getPostById,{id}
     ).subscribe((post)=>{
       this.post=post;
       this.createForm();

       console.log(this.post)
      
     })
     
    })
  }
  createForm(){
    this.postForm=new FormGroup({
      title:new FormControl(this.post.title),
      description:new FormControl(this.post.description)
    });
  }
  ngOnDestroy(){if(this.postSubscription){
    this.postSubscription.unsubscribe()
  }
  }
  onSubmit() {
   

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: Post = {
      id: this.post.id,
      title,
      description,
    };
    this.store.dispatch(updatePost({post}))
    this.router.navigate(['posts']);
}
}