import { exhaustMap, map } from 'rxjs/operators';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { loginStart, loginSuccess } from './auth.action';


@Injectable()


export class AuthEffects{

 constructor(private actions$:Actions, private authService:AuthService){}

 

   login$  = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
          
            return loginSuccess();
          })
        );
      })
    );
  });

}