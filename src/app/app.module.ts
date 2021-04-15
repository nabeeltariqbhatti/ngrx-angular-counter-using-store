import { appReducer } from './store/app.state';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {StoreModule} from '@ngrx/store'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  

    
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer), 
    StoreDevtoolsModule.instrument({
    
      logOnly: environment.production,
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
