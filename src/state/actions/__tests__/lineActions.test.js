import {
  addLine,
  findLine,
  removeLine,
  clearLines,
} from '../lineActions';
import {
  ADD_LINE,
  FIND_LINE,
  REMOVE_LINE,
  CLEAR_LINES,
} from '../../actionTypes/lineActionTypes';

describe('Line Action Generators', () => {
  it('should create an action to add a line', () => {
    const line = {
      startPoint: {
        x: 0,
        y: 0,
        id: 98231,
      },
      endPoint: {
        x: 1,
        y: 1,
        id: 58385,
      },
      id: 91490,
    };
    const expectedAction = {
      type: ADD_LINE,
      line,
    };
    expect(addLine(line)).toEqual(expectedAction);
  });
  it('should create an action to find a line by ID', () => {
    const id = 91490;
    const expectedAction = {
      type: FIND_LINE,
      id,
    };
    expect(findLine(id)).toEqual(expectedAction);
  });
  it('should create an action to remove a line by ID', () => {
    const id = 91490;
    const expectedAction = {
      type: REMOVE_LINE,
      id,
    };
    expect(removeLine(id)).toEqual(expectedAction);
  });
  it('should create an action to clear all lines', () => {
    const expectedAction = {
      type: CLEAR_LINES,
    };
    expect(clearLines()).toEqual(expectedAction);
  });
});
