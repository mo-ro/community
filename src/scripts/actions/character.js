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

export const moveCharacterUp = (cannotWalk) => ({
  type: MOVE_CHARACTER_UP,
  payload: {
    cannotWalk: cannotWalk
  }
});

export const moveCharacterRight = (cannotWalk) => ({
  type: MOVE_CHARACTER_RIGHT,
  payload: {
    cannotWalk: cannotWalk
  }
});

export const moveCharacterDown = (cannotWalk) => ({
  type: MOVE_CHARACTER_DOWN,
  payload: {
    cannotWalk: cannotWalk
  }
});

export const moveCharacterLeft = (cannotWalk) => ({
  type: MOVE_CHARACTER_LEFT,
  payload: {
    cannotWalk: cannotWalk
  }
});

export const whileWalking = () => ({
  type: WHILE_WALKING,
  payload: {}
});

export const stopWalking = () => ({
  type: STOP_WALKING,
  payload: {}
});

export const cannotWalk = () => ({
  type: CANNOT_WALK,
  payload: {}
});

export const changeCharacter = (currentCharacter) => ({
  type: CHANGE_CHARACTER,
  payload: {
    currentCharacter: currentCharacter
  }
})