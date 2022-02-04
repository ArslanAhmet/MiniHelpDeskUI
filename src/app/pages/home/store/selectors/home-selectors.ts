import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers/';
import * as fromUser from '../reducers/User.reducer';
import * as fromAppRoot from '../../../../store';
import { UserItem } from '../../../../shared/models';

export const getCompleteUserState = createSelector(
  fromFeature.getUserState,
  (state: fromFeature.HomeState) => state.kangals,
);

export const getAllUserEntities = createSelector(
  getCompleteUserState,
  fromUser.getUserItemEntities,
);

export const getUserItemsLoaded = createSelector(
  getCompleteUserState,
  fromUser.getUserItemsLoaded,
);

export const getPaginationHeader = createSelector(
  getCompleteUserState,
  fromUser.getPaginationHeader,
);


export const getAllUsers = createSelector(
  getAllUserEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
