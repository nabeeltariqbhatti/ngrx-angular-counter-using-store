import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  postForm: FormGroup
  constructor() { }

  ngOnInit(): void {
this.postForm = new FormGroup({
  title:new FormControl(null,[Validators.required,Validators.minLength(6)]),
  description:new FormControl(null,[Validators.required,Validators.minLength(6)])
})
  }

}
