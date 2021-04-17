import { createReducer, on } from '@ngrx/store';
import { state } from "@angular/animations"
import { initialState } from './auth.state';
import { loginSuccess } from './auth.action';

const _authReducer=createReducer(initialState,on(loginSuccess,(state,action)=>{
 console.log(action)
 return {
  ...state,
  user: action.user
 }
}))
export function AuthReducer(state,action){
 return _authReducer(state,action);
}