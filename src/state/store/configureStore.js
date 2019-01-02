import { createStore, combineReducers } from 'redux';

import pointsReducer from '../reducers/pointsReducer';
import linesReducer from '../reducers/linesReducer';
import scanIsActiveReducer from '../reducers/scanIsActiveReducer';
import scanStepReducer from '../reducers/scanStepReducer';
import scanIsAutoReducer from '../reducers/scanIsAutoReducer';
import isEditableReducer from '../reducers/isEditableReducer';

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
      // Tells us whether the scan should proceed automatically or
      // if it should go step by step, proceeding only when the user
      // is ready.
      scanIsAuto: scanIsAutoReducer,
      // Tdlls our current step in the Graham Scan algorithm.
      scanStep: scanStepReducer,
      // Tells us whether the canvas is editable or not.
      isEditable: isEditableReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
