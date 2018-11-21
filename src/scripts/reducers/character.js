import { MOVE_CHARACTER } from '../constants/character';

const initState = {
  test: 'a'
}

export default (state = initState, action) => {
  switch (action.type) {
    case MOVE_CHARACTER:
      return {
        ...state,
        test: 'b'
      }
    default:
      return {
        ...state
      }
  }
}