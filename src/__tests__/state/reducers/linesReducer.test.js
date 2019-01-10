import reducer from '../../../state/reducers/linesReducer';
import {
  ADD_LINE,
  CLEAR_LINES,
  SET_ERROR_LINE,
  CLEAR_ERROR_LINES,
} from '../../../state/actionTypes/lineActionTypes';
import { NULL, ERROR } from '../../../__constants__/LINE_STATUSES';
import UUID_MOCK_ID from '../../__constants__/UUID_MOCK_ID';

describe('Points Reducer', () => {
  let startPoint;
  let endPoint;
  let lineName;
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
    lineName = UUID_MOCK_ID;
    line = {
      startPoint,
      endPoint,
      name: lineName,
      status: NULL,
    };
  });
  it('should handle ADD_LINE', () => {
    const action = {
      type: ADD_LINE,
      startPoint,
      endPoint,
    };
    const initialState = [];
    const finalState = [line];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle SET_ERROR_LINE', () => {
    const action = {
      type: SET_ERROR_LINE,
      startPoint,
      endPoint,
    };
    const initialState = [line];
    const finalState = [{
      ...line,
      status: ERROR,
    }];

    expect(reducer(initialState, action)).toEqual(finalState);
  });
  it('should handle CLEAR_ERROR_LINES', () => {
    const action = {
      type: CLEAR_ERROR_LINES,
    };
    const initialState = [line, {
      ...line,
      status: ERROR,
    }];
    const finalState = [line];

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
