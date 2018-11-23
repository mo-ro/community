import { combineReducers } from 'redux';
import character from './character';
import townPage from './townPage';
import message from './message';

export default combineReducers({
  character,
  townPage,
  message
});