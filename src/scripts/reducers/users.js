import {
  CHANGE_USER_NUM
} from "../constants/users";

const initState = {
  currentUsers: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_USER_NUM:
      return {
        ...state,
        currentUsers: action.payload.currentUsers
      }
      break;
  
    default:
      return {
        ...state
      }
      break;
  }
}