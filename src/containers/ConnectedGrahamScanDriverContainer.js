import { 
  acceptPoint,
  rejectPoint,
  clearPoints,
  sortPoints,
  resetPoints,
} from '../state/actions/pointActions';
import { addLine, removeLine, clearLines } from '../state/actions/lineActions';
import {
  setGetStartPoint,
  setSortPoints,
  setAddNextPoint,
  setFixRightTurn,
  setDone,
} from '../state/actions/scanStepActions';
import { activateScan, deactivateScan } from '../state/actions/scanIsActiveActions';
import { activateEdits, deactivateEdits } from '../state/actions/isEditableActions';
import { activateAuto, deactivateAuto } from '../state/actions/scanIsAutoActions';
import connectWithStore from '../state/store/connectWithStore';

import GrahamScanDriverContainer from './GrahamScanDriverContainer';

const mapStateToProps = state => ({
  points: state.points,
  isActive: state.scanIsActive,
  step: state.scanStep,
  isAuto: state.scanIsAuto,
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
  activateScan,
  deactivateScan,
  setGetStartPoint,
  setSortPoints,
  setAddNextPoint,
  setFixRightTurn,
  setDone,
  activateEdits,
  deactivateEdits,
  activateAuto,
  deactivateAuto,
})(GrahamScanDriverContainer);
