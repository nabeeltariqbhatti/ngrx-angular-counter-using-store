import { appReducer } from './store/app.state';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './ccounter/counter/counter.component';
import { CounterOutputComponent } from './ccounter/counter-output/counter-output.component';
import { CounterButtonComponent } from './ccounter/counter-button/counter-button.component';
import {StoreModule} from '@ngrx/store'
import { counterReducer } from './ccounter/state/reducer';
import { CustomCounterInputComponent } from './ccounter/custom-counter-input/custom-counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { postReducer } from './posts/posts-list/state/post.reducer';
import { AddPostsComponent } from './posts/add-posts/add-posts.component';




@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent,
    AddPostsComponent,

    
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
