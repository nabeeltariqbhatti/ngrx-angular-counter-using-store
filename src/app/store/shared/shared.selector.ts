import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.state';
export const SHARED_STATE_NAME='shared';

const geSharedState=createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading=createSelector(geSharedState,(state)=>{return state.ShowLodaing})