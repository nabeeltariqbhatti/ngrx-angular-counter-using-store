import { initialState } from './post.state';


import {createReducer,on} from '@ngrx/store';
import { state } from '@angular/animations';
import { addPost, deletePost, updatePost } from './post.action';





const _postReducer=createReducer(initialState,
 on(addPost,( state,action) =>{
 console.log(action.type)
 let post={...action.post};
 post.id=(state.posts.length+1).toString();
 return {
  ...state,
  posts:[
   ...state.posts, post
  ]
 }

}),on(updatePost,( state,action) =>{ 
 const updatedPosts=state.posts.map(post=>{
  return action.post.id === post.id ?action.post:post
 });
 return{
  ...state,
  posts:updatedPosts,
 }
}),on(deletePost,( state,{id})=>{
 const updatedPosts=state.posts.filter(post=>{
  return post.id !== id;
 })
 console.log(updatedPosts);
 return {
  ...state,posts:updatedPosts

 }})
)



export function postReducer(state,action){

 return _postReducer(state,action);
}