import { createStore, combineReducers } from 'redux';

import pointsReducer from '../reducers/pointsReducer';
import linesReducer from '../reducers/linesReducer';
import scanIsActiveReducer from '../reducers/scanIsActiveReducer';
import scanStepReducer from '../reducers/scanStepReducer';

export default () => {
  const store = createStore(
    combineReducers({
      points: pointsReducer,
      lines: linesReducer,
      scanIsActive: scanIsActiveReducer,
      scanStep: scanStepReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
