import { initialState } from './../../posts/posts-list/state/post.state';
import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { setLoadingSpinner } from './shared.actions';

 const _sharedReducer=createReducer(initialState,on(setLoadingSpinner,(state,action)=>{
 return {
  ...state,
showLoading:action.status
 }
}))



export function sharedReducer(state,action){
 return _sharedReducer(state,action);
}