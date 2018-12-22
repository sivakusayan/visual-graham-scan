import reducer from '../pointsReducer';
import {
  ADD_POINT,
  ACCEPT_POINT,
  REJECT_POINT,
  CLEAR_POINTS,
} from '../../actionTypes/pointActionTypes';

describe('Points Reducer', () => {
  let pointID;
  let point;

  beforeEach(() => {
    pointID = 914901481;
    point = {
      x: 10,
      y: 20,
      id: pointID,
      status: 'NULL',
    };
  });
  it('should handle ADD_POINT', () => {
    const action = {
      type: ADD_POINT,
      point,
    };
    const initialState = [];
    const finalState = [point];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle ACCEPT_POINT', () => {
    const action = {
      type: ACCEPT_POINT,
      id: pointID,
    };
    const initialState = [point];
    const finalState = [{ ...point, status: 'ACCEPTED' }];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle REJECT_POINT', () => {
    const action = {
      type: REJECT_POINT,
      id: pointID,
    };
    const initialState = [point];
    const finalState = [{ ...point, status: 'REJECTED' }];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle CLEAR_POINTS', () => {
    const action = {
      type: CLEAR_POINTS,
    };
    const initialState = [point];
    const finalState = [];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
});
