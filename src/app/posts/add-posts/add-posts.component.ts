import { addPost } from './../posts-list/state/post.action';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Appstate } from 'src/app/store/app.state';


@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  allow:boolean = false;
  postForm: FormGroup
  constructor(private store:Store<Appstate>) { }

  ngOnInit(): void {
 this.postForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
    });
  }


onAddPost() {
 
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
console.log(post);
    this.store.dispatch(addPost({ post }));
  }
}

