import { Appstate } from './../../store/app.state';
import { getText } from './../state/counter.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { changeText, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
value:number=0;
text$ :Observable<string>;
  constructor(private store:Store<Appstate>) { }

  ngOnInit(): void {
        console.log("Change Text");
           this.text$=this.store.select(getText)
  
  }


      onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }
  
  changeText(){

    this.store.dispatch(changeText());
     this.text$=this.store.select(getText)
  }

  

}
