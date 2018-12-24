import reducer from '../../../state/reducers/linesReducer';
import {
  ADD_LINE,
  REMOVE_LINE,
  CLEAR_LINES,
} from '../../../state/actionTypes/lineActionTypes';
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
      status: 'NULL',
    };
    endPoint = {
      x: 20,
      y: 10,
      name: 109849381,
      status: 'NULL',
    };
    lineName = UUID_MOCK_ID;
    line = {
      startPoint,
      endPoint,
      name: lineName,
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
  it('should handle REMOVE_LINE', () => {
    const action = {
      type: REMOVE_LINE,
      name: lineName,
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
