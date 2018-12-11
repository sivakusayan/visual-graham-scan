import reducer from '../pointsReducer';
import {
  ADD_POINT,
  ACCEPT_POINT,
  REJECT_POINT,
  CLEAR_POINTS,
} from '../../actionTypes/pointActionTypes';

describe('Points Reducer', () => {
  it('should handle ADD_POINT', () => {
    const point = {
      x: 10,
      y: 20,
      id: 914901481,
    };
    const action = {
      type: ADD_POINT,
      point,
    };
    const initialState = [];
    const finalState = [point];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle ACCEPT_POINT', () => {
    const id = 914901481;
    const point = {
      x: 10,
      y: 20,
      id,
    };
    const action = {
      type: ACCEPT_POINT,
      id,
    };
    const initialState = [point];
    const finalState = [{ ...point, status: 'accepted' }];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle REJECT_POINT', () => {
    const id = 914901481;
    const point = {
      x: 10,
      y: 20,
      id,
    };
    const action = {
      type: REJECT_POINT,
      id,
    };
    const initialState = [point];
    const finalState = [{ ...point, status: 'rejected' }];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle CLEAR_POINTS', () => {
    const point = {
      x: 10,
      y: 20,
      id: 914901481,
    };
    const action = {
      type: CLEAR_POINTS,
    };
    const initialState = [point];
    const finalState = [];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
});
