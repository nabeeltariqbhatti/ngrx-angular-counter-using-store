import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { changeText, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
value:number=0;
text:string="";
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data)=>{
      this.text=data.text;

    })
  }

  onAdd(){
    console.log(this.value);
    this.store.dispatch(customIncrement({value:this.value}))
  }
  changeText(){
    this.store.dispatch(changeText());
  }

  

}
