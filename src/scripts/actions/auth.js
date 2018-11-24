import {
  SIGN_IN,
  SIGN_OUT
} from "../constants/auth";

export const signIn = (uid) => ({
  type: SIGN_IN,
  payload: {
    uid: uid
  }
});

export const signOut = (uid) => ({
  type: SIGN_OUT,
  payload: {
    uid: uid
  }
});