import { ACTIVATE_EDITS, DEACTIVATE_EDITS } from '../actionTypes/isEditableActionTypes';

const initialState = true;

const isEditableReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ACTIVATE_EDITS):
      return true;
    case (DEACTIVATE_EDITS):
      return false;
    default:
      return state;
  }
};

export default isEditableReducer;
