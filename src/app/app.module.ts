import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './ccounter/counter/counter.component';
import { CounterOutputComponent } from './ccounter/counter-output/counter-output.component';
import { CounterButtonComponent } from './ccounter/counter-button/counter-button.component';
import {StoreModule} from '@ngrx/store'
import { counterReducer } from './ccounter/state/reducer';
import { CustomCounterInputComponent } from './ccounter/custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    StoreModule.forRoot({counter:counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
