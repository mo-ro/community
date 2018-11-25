import {
  MOVE_CHARACTER_UP,
  MOVE_CHARACTER_RIGHT,
  MOVE_CHARACTER_DOWN,
  MOVE_CHARACTER_LEFT,
  WHILE_WALKING,
  STOP_WALKING,
  CANNOT_WALK,
  CHANGE_CHARACTER
} from '../constants/character';

const initState = {
  direction: "down",
  isWalking: false,
  cannotWalk: false,
  position_x: 3,
  position_y: 3,
  currentCharacter: "a_1"
}

export default (state = initState, action) => {
  switch (action.type) {
    case MOVE_CHARACTER_UP:
      return {
        ...state,
        direction: 'up',
        y: (action.payload.cannotWalk ? state.position_y : state.position_y--)
      }
    case MOVE_CHARACTER_RIGHT:
      return {
        ...state,
        direction: 'right',
        x: (action.payload.cannotWalk ? state.position_x : state.position_x++)
      }
    case MOVE_CHARACTER_DOWN:
      return {
        ...state,
        direction: 'down',
        y: (action.payload.cannotWalk ? state.position_y : state.position_y++)
      }
    case MOVE_CHARACTER_LEFT:
      return {
        ...state,
        direction: 'left',
        x: (action.payload.cannotWalk ? state.position_x : state.position_x--)
      }
    case WHILE_WALKING:
      return {
        ...state,
        isWalking: true
      }
    case STOP_WALKING:
      return {
        ...state,
        isWalking: false,
        cannotWalk: false
      }
    case CANNOT_WALK:
      return {
        ...state,
        cannotWalk: true
      }
    case CHANGE_CHARACTER:
      return {
        ...state,
        currentCharacter: action.payload.currentCharacter
      }
    default:
      return {
        ...state
      }
  }
}