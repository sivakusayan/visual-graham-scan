import { createStore, combineReducers } from 'redux';

import pointsReducer from '../reducers/pointsReducer';
import linesReducer from '../reducers/linesReducer';
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
      // Tells us whether the canvas is editable or not.
      isEditable: isEditableReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
