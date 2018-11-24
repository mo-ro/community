import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import character from './character';
import townPage from './townPage';
import message from './message';

export default combineReducers({
  auth,
  users,
  character,
  townPage,
  message
});