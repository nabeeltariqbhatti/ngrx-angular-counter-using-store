import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";


const postState=createFeatureSelector<PostState>('post')

export const getPosts=createSelector(postState,(state)=>{ return state.posts})