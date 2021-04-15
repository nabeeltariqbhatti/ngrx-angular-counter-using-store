import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';


export const addPost=createAction('addPost',props<{post:Post}>())

export const updatePost=createAction('updatePost',props<{post:Post}>())


export const deletePost=createAction('deletePost',props<{id:string}>())