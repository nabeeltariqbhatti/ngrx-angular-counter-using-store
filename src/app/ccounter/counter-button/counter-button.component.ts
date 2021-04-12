import { decrement, reset } from './../state/counter.actions';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../state/counter.actions';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store:Store<{counter:{counter:number}}>) { }

  ngOnInit(): void {
  }
  onIncrement(){
   this.store.dispatch(increment());
     
   };
   onDecrement(){
    this.store.dispatch(decrement());
   };
   onReset(){
this.store.dispatch(reset());
   };

}
