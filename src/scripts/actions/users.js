import {
  SIGN_IN,
  SIGN_OUT
} from "../constants/users";

export const signIn = () => ({
  type: SIGN_IN,
  payload: {}
});

export const signOut = () => ({
  type: SIGN_OUT,
  payload: {}
});