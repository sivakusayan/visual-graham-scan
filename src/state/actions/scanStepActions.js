import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../actionTypes/scanStepActionTypes';

export const getStartPoint = () => ({
  type: GET_START_POINT,
});

export const sortPoints = () => ({
  type: SORT_POINTS,
});

export const addNextPoint = () => ({
  type: ADD_NEXT_POINT,
});

export const fixRightTurn = () => ({
  type: FIX_RIGHT_TURN,
});

export const done = () => ({
  type: DONE,
});
