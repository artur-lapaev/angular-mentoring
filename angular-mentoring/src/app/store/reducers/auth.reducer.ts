import { Action, createReducer, on } from '@ngrx/store';
import { login, logout } from '../actions/auth.action';
import { AuthToken } from '../auth-token';

export const authUserInit: AuthToken = {
  token: ''
};

// https://ngrx.io/guide/store/reducers#creating-the-reducer-function

const reducer = createReducer(
  authUserInit,
  on(login, (state, { userToken }) => ({ ...state, token: userToken })),
  on(logout, (state, { userToken }) => ({ ...state, token: userToken }))
);

export function authReducer(state: AuthToken, action: Action) {
  return reducer(state, action);
}
