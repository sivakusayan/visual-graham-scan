import {
  addLine,
  removeLine,
  clearLines,
} from '../../../state/actions/lineActions';
import {
  ADD_LINE,
  REMOVE_LINE,
  CLEAR_LINES,
} from '../../../state/actionTypes/lineActionTypes';

describe('Line Action Generators', () => {
  it('should create an action to add a line', () => {
    const startPoint = {
      x: 0,
      y: 0,
      name: 98231,
    };
    const endPoint = {
      x: 1,
      y: 1,
      name: 58385,
    };
    const expectedAction = {
      type: ADD_LINE,
      startPoint,
      endPoint,
    };
    expect(addLine(startPoint, endPoint)).toEqual(expectedAction);
  });
  it('should create an action to remove a line by ID', () => {
    const name = 91490;
    const expectedAction = {
      type: REMOVE_LINE,
      name,
    };
    expect(removeLine(name)).toEqual(expectedAction);
  });
  it('should create an action to clear all lines', () => {
    const expectedAction = {
      type: CLEAR_LINES,
    };
    expect(clearLines()).toEqual(expectedAction);
  });
});
