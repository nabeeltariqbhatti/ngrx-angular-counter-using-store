import { Observable } from 'rxjs';
import { getCounter } from './../state/counter.selector';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter$:Observable<number>;
  constructor(private store:Store<{counter:{counter:number}}>) { }



  ngOnInit(): void {
    console.log("Counter");
this.counter$=this.store.select(getCounter);
  }

}
