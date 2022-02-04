import { createAction, props } from '@ngrx/store';
import { ModelDescriptor, UserItem } from '../../../../shared/models';

export const addUser = createAction(
  '[Users] ADD_USER',
  props<{ payload: UserItem }>(),
);

export const addUserSuccess = createAction(
  '[Users] ADD_USER_SUCCESS',
  props<{ payload: UserItem }>(),
);

export const loadUser = createAction('[Users] LOAD_USER');

export const loadUserSuccess = createAction(
  '[Users] LOAD_USER_SUCCESS',
  props<{ payload:ModelDescriptor<UserItem[]> }>(),
);

export const deleteUser = createAction(
  '[Users] DELETE_USER',
  props<{ payload: UserItem }>(),
);

export const deleteUserSuccess = createAction(
  '[Users] DELETE_USER_SUCCESS',
  props<{ payload: any }>(),
);

export const updateUser = createAction(
  '[Users] UPDATE_USER',
  props<{ payload: UserItem }>(),
);

export const updateUserSuccess = createAction(
  '[Users] UPDATE_USER_SUCCESS',
  props<{ payload: UserItem }>(),
);

export const askError = createAction(
  '[Users] USER_ERROR',
  props<{ payload: any }>(),
);
export const setPaginationHeader = createAction(
  '[Users] Set Pagination Header',
  props<{ payload: string }>(),
);
