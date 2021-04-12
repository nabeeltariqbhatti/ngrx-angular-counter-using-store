import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
value:number=0;
  constructor(private store:Store<{counter:{counter:number}}>) { }

  ngOnInit(): void {
  }

  onAdd(){
    console.log(this.value);
    this.store.dispatch(customIncrement({value:this.value}))
  }

}
