import { changeText, customIncrement, decrement, increment, reset } from './counter.actions';
import {initialState} from './counter.state';

import {createReducer,on} from '@ngrx/store';
import { state } from '@angular/animations';


const _counterReducer=createReducer(initialState,
 on(increment,( state) =>{
 return {
  ...state,
  counter: state.counter+1
 }

}) ,
on(decrement,( state) =>{
 return {
  ...state,
  counter: state.counter-1
 }

}),on(reset,( state) =>{
 return {
  ...state,
  counter: 0
 }

}),
on(customIncrement,( state,action)=>{
 return {
 ...state, 
 counter:state.counter+ action.value
 }

}),on(changeText,(state,action)=>{

 return{
...state,
       text:"okay I am changed"
 } 
})

);








export function counterReducer(state,action){

 return _counterReducer(state,action);
}