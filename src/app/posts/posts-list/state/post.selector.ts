import { state } from "@angular/animations";

import { createFeatureSelector, createSelector, createSelectorFactory } from "@ngrx/store";
import { PostState } from "./post.state";


const postState=createFeatureSelector<PostState>('post')



export const getPosts=createSelector(postState,(state)=>{ return state.posts})

export const getPostById=createSelector(postState,(state,props)=>{ return state.posts.find(post=>post.id===props.id)})