import {
  MOVE_CHARACTER_UP,
  MOVE_CHARACTER_RIGHT,
  MOVE_CHARACTER_DOWN,
  MOVE_CHARACTER_LEFT,
  WHILE_WALKING,
  STOP_WALKING,
} from '../constants/character';

export const moveCharacterUp = () => ({
  type: MOVE_CHARACTER_UP,
  payload: {}
});

export const moveCharacterRight = () => ({
  type: MOVE_CHARACTER_RIGHT,
  payload: {}
});

export const moveCharacterDown = () => ({
  type: MOVE_CHARACTER_DOWN,
  payload: {}
});

export const moveCharacterLeft = () => ({
  type: MOVE_CHARACTER_LEFT,
  payload: {}
});

export const whileWalking = () => ({
  type: WHILE_WALKING,
  payload: {}
});

export const stopWalking = () => ({
  type: STOP_WALKING,
  payload: {}
});