// https://ngrx.io/guide/store/actions#writing-actions

import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ userToken: string; }>()
);

export const logout = createAction(
  '[Course Page] Logout',
  props<{ userToken: string; }>()
);
