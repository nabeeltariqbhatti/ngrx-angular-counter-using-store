import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AUTH_STATE_NAME } from './state/auth.selector';
import { AuthReducer } from './state/auth.reducer';
import { AuthEffects } from './state/auth.effects';




const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
];


@NgModule({

 imports:[RouterModule.forChild(routes),CommonModule,ReactiveFormsModule,EffectsModule.forFeature([AuthEffects]),StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer)],

 declarations: [
     LoginComponent,
     SignupComponent,
     
 ]

})


export class AuthModule {}