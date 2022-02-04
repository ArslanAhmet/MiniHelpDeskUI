import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as homeActions from '../actions/home-actions';
import { UserItem } from '../../../../shared/models';
import * as AppState from '../../../../state/app.state';

export interface State extends AppState.State {
  home: HomeReducerState;
}
export interface HomeReducerState {
  entities: { [id: string]: UserItem };
  loaded: boolean;
  loading: boolean;
  paginationHeader: string;
}

export const initialState: HomeReducerState = {
  entities: {},
  loaded: false,
  loading: false,
  paginationHeader: '',
};

const homeReducerInternal = createReducer<HomeReducerState>(
  initialState,
  on(
    homeActions.addUserSuccess,
    homeActions.updateUserSuccess,
    (state : HomeReducerState , { payload }): HomeReducerState => {
      const entities = {
        ...state.entities,
        [payload.id]: payload
      };

      return {
        ...state,
        entities,
      };
    },
  ),
  on(homeActions.setPaginationHeader, (state, { payload }): HomeReducerState => {
       return {
      ...state,
      paginationHeader: payload,
    };
  }),
  on(homeActions.loadUserSuccess, (state, { payload }): HomeReducerState => {
    const entities: { [id: string]: UserItem } = {};

    for (const entity of payload.value) {
      entities[entity.id] = entity;
    }

    return {
      ...state,
      entities,
      loaded: true,
    };
  }),

  on(homeActions.deleteUserSuccess, (state, { payload }): HomeReducerState => {
    const userItem = payload;
    const { [userItem.id]: removed, ...entities } = state.entities;

    return {
      ...state,
      entities,
    };
  }),

);

export function userReducer(
  state: HomeReducerState | undefined,
  action: Action
) {
  return homeReducerInternal(state, action);
}

export const getUserItemEntities = (state: HomeReducerState) => state.entities;
export const getUserItemsLoaded = (state: HomeReducerState) => state.loaded;
export const getUserItemsLoading = (state: HomeReducerState) => state.loading;
export const getPaginationHeader = (state: HomeReducerState) => state.paginationHeader;
