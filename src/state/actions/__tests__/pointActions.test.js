import {
  addPoint,
  findPoint,
  acceptPoint,
  rejectPoint,
  clearPoints,
} from '../pointActions';
import {
  ADD_POINT,
  FIND_POINT,
  ACCEPT_POINT,
  REJECT_POINT,
  CLEAR_POINTS,
} from '../../actionTypes/pointActionTypes';

describe('actions', () => {
  it('should create an action to add a point', () => {
    const point = {
      x: 10,
      y: 20,
    };
    const expectedAction = {
      type: ADD_POINT,
      point,
    };
    expect(addPoint(point)).toEqual(expectedAction);
  });
  it('should create an action to find a point by ID', () => {
    const id = 914901481;
    const expectedAction = {
      type: FIND_POINT,
      id,
    };
    expect(findPoint(id)).toEqual(expectedAction);
  });
  it('should create an action to accept a point by ID', () => {
    const id = 914901481;
    const expectedAction = {
      type: ACCEPT_POINT,
      id,
    };
    expect(acceptPoint(id)).toEqual(expectedAction);
  });
  it('should create an action to reject a point by ID', () => {
    const id = 914901481;
    const expectedAction = {
      type: REJECT_POINT,
      id,
    };
    expect(rejectPoint(id)).toEqual(expectedAction);
  });
  it('should create an action to clear all the points', () => {
    const expectedAction = {
      type: CLEAR_POINTS,
    };
    expect(clearPoints()).toEqual(expectedAction);
  });
});
