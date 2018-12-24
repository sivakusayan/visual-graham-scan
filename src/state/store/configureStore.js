import { createStore, combineReducers } from 'redux';

import pointsReducer from '../reducers/pointsReducer';
import linesReducer from '../reducers/linesReducer';
import scanIsActiveReducer from '../reducers/scanIsActiveReducer';
import scanStepReducer from '../reducers/scanStepReducer';

export default () => {
  const store = createStore(
    combineReducers({
      // The list of points that will be used for calculations.
      // Every point in this array should be rendered to the view.
      points: pointsReducer,
      // The list of lines that will be used for calculations.
      // Every line in this array should be rendered to the view.
      lines: linesReducer,
      // Tells us whether the scan is currently running or not.
      // This field can be used to disable user interaction with
      // the canvas while the scan is running, or give us a
      // possible way to implement a 'pause' feature.
      scanIsActive: scanIsActiveReducer,
      // Tdlls our current step in the Graham Scan algorithm.
      scanStep: scanStepReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
