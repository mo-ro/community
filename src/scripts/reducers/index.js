import { combineReducers } from 'redux';
import auth from './auth';
import character from './character';
import townPage from './townPage';
import message from './message';

export default combineReducers({
  auth,
  character,
  townPage,
  message
});