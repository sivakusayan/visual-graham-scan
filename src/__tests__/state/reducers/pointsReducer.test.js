import reducer from '../../../state/reducers/pointsReducer';
import {
  ADD_POINT,
  ACCEPT_POINT,
  REJECT_POINT,
  CLEAR_POINTS,
} from '../../../state/actionTypes/pointActionTypes';
import { NULL, ACCEPTED, REJECTED } from '../../../__constants__/POINT_STATUSES';
import UUID_MOCK_ID from '../../__constants__/UUID_MOCK_ID';
import { SORT_POINTS } from '../../../__constants__/SCAN_STEPS';
import sortPoints from '../../../algorithm/helpers/sortPoints';

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
      status: NULL,
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
    const finalState = [{ ...expectedPoint, status: ACCEPTED }];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle REJECT_POINT', () => {
    const action = {
      type: REJECT_POINT,
      name: UUID_MOCK_ID,
    };
    const initialState = [expectedPoint];
    const finalState = [{ ...expectedPoint, status: REJECTED }];

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
  it('should handle SORT_POINTS', () => {
    const startPoint = { x: 0, y: 0, name: 1, status: NULL };
    const point1 = startPoint;
    const point2 = { x: -1, y: 0.2, name: 2, status: NULL };
    const point3 = { x: -2, y: 1, name: 3, status: NULL };
    const point4 = { x: -3, y: 2, name: 4, status: NULL };
    const point5 = { x: 1, y: 1, name: 5, status: NULL };

    const initialState = [point1, point2, point3, point4, point5];
    const initialStateCopy = JSON.parse(JSON.stringify(initialState));
    const action = {
      type: SORT_POINTS,
      startPoint,
    };
    // Sorts in place
    sortPoints(startPoint, initialStateCopy);

    expect(reducer(initialState, action)).toEqual(initialStateCopy);
  });
});
