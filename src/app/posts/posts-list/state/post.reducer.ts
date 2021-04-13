import { initialState } from './post.state';


import {createReducer,on} from '@ngrx/store';
import { state } from '@angular/animations';





const _postReducer=createReducer((initialState))



export function postReducer(state,action){

 return _postReducer(state,action);
}