import {
  SUBMIT_MESSAGE
} from '../constants/message';

export const submitMessage = (message) => ({
  type: SUBMIT_MESSAGE,
  payload: {
    message: message
  }
});