import { createStore, combineReducers } from 'redux';

import pointsReducer from '../reducers/pointsReducer';
import linesReducer from '../reducers/linesReducer';

export default () => {
  const store = createStore(
    combineReducers({
      points: pointsReducer,
      lines: linesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
