import {
  SUBMIT_MESSAGE,
  EDIT_MESSAGE
} from '../constants/message';

export const submitMessage = () => ({
  type: SUBMIT_MESSAGE,
  payload: {}
});

export const editMessage = (message) => ({
  type: EDIT_MESSAGE,
  payload: {
    message: message
  }
});