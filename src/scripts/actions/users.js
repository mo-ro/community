import {
  CHANGE_USER_NUM
} from "../constants/users";

export const changeUserNum = (currentUsers) => ({
  type: CHANGE_USER_NUM,
  payload: {
    currentUsers: currentUsers
  }
});