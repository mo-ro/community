import { combineReducers } from 'redux';
import users from './users';
import character from './character';
import townPage from './townPage';
import message from './message';

export default combineReducers({
  users,
  character,
  townPage,
  message
});