import reducer from '../linesReducer';
import {
  ADD_LINE,
  REMOVE_LINE,
  CLEAR_LINES,
} from '../../actionTypes/lineActionTypes';

describe('Points Reducer', () => {
  let startPoint;
  let endPoint;
  let lineID;
  let line;

  beforeEach(() => {
    startPoint = {
      x: 10,
      y: 20,
      name: 914901481,
    };
    endPoint = {
      x: 20,
      y: 10,
      name: 109849381,
    };
    lineID = 61783471;
    line = {
      startPoint,
      endPoint,
      name: lineID,
    };
  });
  it('should handle ADD_LINE', () => {
    const action = {
      type: ADD_LINE,
      line,
    };
    const initialState = [];
    const finalState = [line];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle REMOVE_LINE', () => {
    const action = {
      type: REMOVE_LINE,
      name: lineID,
    };
    const initialState = [line];
    const finalState = [];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle CLEAR_LINES', () => {
    const action = {
      type: CLEAR_LINES,
    };
    const initialState = [line];
    const finalState = [];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
});
