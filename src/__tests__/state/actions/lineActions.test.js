import {
  addLine,
  setErrorLine,
  clearErrorLines,
  clearLines,
} from '../../../state/actions/lineActions';
import {
  ADD_LINE,
  SET_ERROR_LINE,
  CLEAR_ERROR_LINES,
  CLEAR_LINES,
} from '../../../state/actionTypes/lineActionTypes';

describe('Line Action Creators', () => {
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
  it('should create an action set the specified line as an error line', () => {
    const expectedAction = {
      type: SET_ERROR_LINE,
      startPoint,
      endPoint,
    };
    expect(setErrorLine(startPoint, endPoint)).toEqual(expectedAction);
  });
  it('should create an action to clear all error lines', () => {
    const expectedAction = {
      type: CLEAR_ERROR_LINES,
    };
    expect(clearErrorLines()).toEqual(expectedAction);
  });
  it('should create an action to clear all lines', () => {
    const expectedAction = {
      type: CLEAR_LINES,
    };
    expect(clearLines()).toEqual(expectedAction);
  });
});
