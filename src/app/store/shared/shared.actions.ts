import { state } from "@angular/animations";
import { createAction, props } from "@ngrx/store";

export const SET_LOADING_ACTION='[shared] setLoading Spinner';


export const setLoadingSpinner=createAction(SET_LOADING_ACTION,props<{status:boolean}>());