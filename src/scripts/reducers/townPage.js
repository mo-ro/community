import {
  MOVING
} from '../constants/map';

const initState = {
  direction: "down",
  isWalking: false,
  position: {
    x: 3,
    y: 3
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case MOVING:
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
}