import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/store/app.state';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/posts.model';
import { getPostById } from '../posts-list/state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
post:Post;
postForm: FormGroup


   constructor(private route:ActivatedRoute,private store:Store<Appstate>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    
     const id=params.get('id')
     this.store.select(
       getPostById,{id}
     ).subscribe((post)=>{
       this.post=post;
       console.log(this.post)
      
     })
     
    })
  }

}
