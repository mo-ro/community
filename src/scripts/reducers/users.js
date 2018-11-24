import {
  SIGN_IN,
  SIGN_OUT
} from '../constants/users';

const initState = {
  uid: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state
      }
      break;

    case SIGN_OUT:
      return {
        ...state
      }
      break;
  
    default:
      return {
        ...state
      }
      break;
  }
}