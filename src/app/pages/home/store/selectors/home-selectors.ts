import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/';

const getUserState = createFeatureSelector<State>('home');

export const getAllUsers = createSelector(
  getUserState,
  state => state.home.entities,
);


export const getPaginationHeader = createSelector(
  getUserState,
  state => state.home.paginationHeader,
);

