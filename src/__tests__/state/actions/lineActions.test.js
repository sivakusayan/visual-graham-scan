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
  let startPoint;
  let endPoint;

  beforeEach(() => {
    startPoint = {
      x: 0,
      y: 0,
      name: 98231,
    };
    endPoint = {
      x: 1,
      y: 1,
      name: 58385,
    };
  });
  it('should create an action to add a line', () => {
    const expectedAction = {
      type: ADD_LINE,
      startPoint,
      endPoint,
    };
    expect(addLine(startPoint, endPoint)).toEqual(expectedAction);
  });
  it('should create an action to remove a line by ID', () => {
    const expectedAction = {
      type: REMOVE_LINE,
      startPoint,
      endPoint,
    };
    expect(removeLine(startPoint, endPoint)).toEqual(expectedAction);
  });
  it('should create an action to clear all lines', () => {
    const expectedAction = {
      type: CLEAR_LINES,
    };
    expect(clearLines()).toEqual(expectedAction);
  });
});
