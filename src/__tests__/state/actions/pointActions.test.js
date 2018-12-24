import {
  addPoint,
  acceptPoint,
  rejectPoint,
  clearPoints,
} from '../../../state/actions/pointActions';
import {
  ADD_POINT,
  ACCEPT_POINT,
  REJECT_POINT,
  CLEAR_POINTS,
} from '../../../state/actionTypes/pointActionTypes';

describe('Point Action Generators', () => {
  it('should create an action to add a point', () => {
    const point = {
      x: 10,
      y: 20,
      name: 914901481,
    };
    const expectedAction = {
      type: ADD_POINT,
      point,
    };
    expect(addPoint(point)).toEqual(expectedAction);
  });
  it('should create an action to accept a point by ID', () => {
    const name = 914901481;
    const expectedAction = {
      type: ACCEPT_POINT,
      name,
    };
    expect(acceptPoint(name)).toEqual(expectedAction);
  });
  it('should create an action to reject a point by ID', () => {
    const name = 914901481;
    const expectedAction = {
      type: REJECT_POINT,
      name,
    };
    expect(rejectPoint(name)).toEqual(expectedAction);
  });
  it('should create an action to clear all the points', () => {
    const expectedAction = {
      type: CLEAR_POINTS,
    };
    expect(clearPoints()).toEqual(expectedAction);
  });
});
