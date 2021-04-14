import { initialState } from './post.state';


import {createReducer,on} from '@ngrx/store';
import { state } from '@angular/animations';
import { addPost } from './post.action';





const _postReducer=createReducer(initialState,on(addPost,( state,action) =>{
 console.log(action.type)
 let post={...action.post};
 post.id=(state.posts.length+1).toString();
 return {
  ...state,
  posts:[
   ...state.posts, post
  ]
 }

}))



export function postReducer(state,action){

 return _postReducer(state,action);
}