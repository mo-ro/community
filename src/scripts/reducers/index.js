import { combineReducers } from 'redux';
import character from './character';
import townPage from './townPage';

export default combineReducers({
  character,
  townPage
});