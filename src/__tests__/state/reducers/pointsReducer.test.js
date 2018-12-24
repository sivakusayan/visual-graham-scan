import reducer from '../../../state/reducers/pointsReducer';
import {
  ADD_POINT,
  ACCEPT_POINT,
  REJECT_POINT,
  CLEAR_POINTS,
} from '../../../state/actionTypes/pointActionTypes';
import UUID_MOCK_ID from '../../__constants__/UUID_MOCK_ID';

describe('Points Reducer', () => {
  let testPoint;
  let expectedPoint;

  beforeEach(() => {
    testPoint = {
      x: 10,
      y: 20,
    };
    expectedPoint = {
      ...testPoint,
      name: UUID_MOCK_ID,
      status: 'NULL',
    };
  });
  it('should handle ADD_POINT', () => {
    const action = {
      type: ADD_POINT,
      point: testPoint,
    };
    const initialState = [];
    const finalState = [expectedPoint];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle ACCEPT_POINT', () => {
    const action = {
      type: ACCEPT_POINT,
      name: UUID_MOCK_ID,
    };
    const initialState = [expectedPoint];
    const finalState = [{ ...expectedPoint, status: 'ACCEPTED' }];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle REJECT_POINT', () => {
    const action = {
      type: REJECT_POINT,
      name: UUID_MOCK_ID,
    };
    const initialState = [expectedPoint];
    const finalState = [{ ...expectedPoint, status: 'REJECTED' }];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle CLEAR_POINTS', () => {
    const action = {
      type: CLEAR_POINTS,
    };
    const initialState = [expectedPoint];
    const finalState = [];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
});
