import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';


export const addPost=createAction('addPost',props<{post:Post}>())