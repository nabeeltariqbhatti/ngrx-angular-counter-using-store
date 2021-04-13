import { counterReducer } from '../ccounter/state/reducer';
import { postReducer } from '../posts/posts-list/state/post.reducer';
import { PostState } from '../posts/posts-list/state/post.state';
import { CounterState } from './../ccounter/state/counter.state';


export interface Appstate {
 counter:CounterState,
 post:PostState
}

export const appReducer ={
counter:counterReducer,
post:postReducer
}