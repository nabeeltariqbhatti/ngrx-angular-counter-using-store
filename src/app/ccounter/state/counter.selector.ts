import {CounterState} from "./counter.state"
import {createFeatureSelector, createSelector} from '@ngrx/store'



const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter=createSelector(getCounterState,(state)=>{return state.counter})
export const getText=createSelector(getCounterState,(state)=>{return state.text})


