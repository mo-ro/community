import {
  SUBMIT_MESSAGE
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
        message: action.payload.message,
        submitting: true
      }
      break;
  
    default:
      return {
        ...state
      }
      break;
  }
}