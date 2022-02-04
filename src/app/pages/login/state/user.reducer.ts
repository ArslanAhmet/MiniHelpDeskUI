// Homework

/* NgRx */
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as UserActions from './user.actions';

// State for this feature (User)
export interface DenemeState {
  maskUserName: boolean;
}

const initialState: DenemeState = {
  maskUserName: true
};

// Selector functions
const getUserFeatureState = createFeatureSelector<DenemeState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const userReducer = createReducer<DenemeState>(
  initialState,
  on(UserActions.maskUserName, (state): DenemeState => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
