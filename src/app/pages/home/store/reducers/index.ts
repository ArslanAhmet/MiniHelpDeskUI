import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromHome from './home-reducers';


export interface HomeState {
  users: fromHome.HomeReducerState;
}

export const reducers: ActionReducerMap<HomeState> = {
  users: fromHome.userReducer,
};

export const getUserState = createFeatureSelector<HomeState>('home');
