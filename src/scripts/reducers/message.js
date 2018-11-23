import {
  SUBMIT_MESSAGE,
  EDIT_MESSAGE,
} from "../constants/message";

const initState = {
  message: "",
  submitting: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return {
        ...state,
        submitting: true
      }
      break;

    case EDIT_MESSAGE:
      return {
        ...state,
        message: action.payload.message
      }
  
    default:
      return {
        ...state
      }
      break;
  }
}