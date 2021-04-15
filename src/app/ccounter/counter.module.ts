import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const routes: Routes =[{
  path:'',component:CounterComponent
 },]

@NgModule({
 declarations:[CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent],

 imports: [CommonModule,FormsModule,RouterModule.forChild(routes)]
})
export class CounterModule{

}