import {
  acceptPoint,
  rejectPoint,
  clearPoints,
  sortPoints,
  resetPoints,
} from '../state/actions/pointActions';
import { addLine, removeLine, clearLines } from '../state/actions/lineActions';
import { activateEdits, deactivateEdits } from '../state/actions/isEditableActions';
import connectWithStore from '../state/store/connectWithStore';

import GrahamScanDriverContainer from './GrahamScanDriverContainer';

const mapStateToProps = state => ({
  points: state.points,
  isActive: state.scanIsActive,
  isEditable: state.isEditable,
});

export default connectWithStore(mapStateToProps, {
  acceptPoint,
  rejectPoint,
  clearPoints,
  sortPoints,
  resetPoints,
  addLine,
  removeLine,
  clearLines,
  activateEdits,
  deactivateEdits,
})(GrahamScanDriverContainer);
