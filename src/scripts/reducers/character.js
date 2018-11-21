import {
  MOVE_CHARACTER_UP,
  MOVE_CHARACTER_RIGHT,
  MOVE_CHARACTER_DOWN,
  MOVE_CHARACTER_LEFT,
  WHILE_WALKING,
  STOP_WALKING,
} from '../constants/character';

const initState = {
  direction: "down",
  isWalking: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case MOVE_CHARACTER_UP:
      return {
        ...state,
        direction: 'up'
      }
    case MOVE_CHARACTER_RIGHT:
      return {
        ...state,
        direction: 'right'
      }
    case MOVE_CHARACTER_DOWN:
      return {
        ...state,
        direction: 'down'
      }
    case MOVE_CHARACTER_LEFT:
      return {
        ...state,
        direction: 'left'
      }
    case WHILE_WALKING:
      return {
        ...state,
        isWalking: true
      }
    case STOP_WALKING:
      return {
        ...state,
        isWalking: false
      }
    default:
      return {
        ...state
      }
  }
}