import { StoreModule } from '@ngrx/store';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { postReducer } from './posts-list/state/post.reducer';


const routes:Routes = [ {
  path:'',component:PostsListComponent,
  children:[
 {path:'add',component:AddPostsComponent},
 {path:'edit/:id',component:EditPostComponent}
  ]
  
 }]

@NgModule({
imports:[
 CommonModule,ReactiveFormsModule,RouterModule.forChild(routes),StoreModule.forFeature('posts',postReducer)
],
declarations:[  
    PostsListComponent,
    AddPostsComponent,
    EditPostComponent]

})



export class PostModule{

}