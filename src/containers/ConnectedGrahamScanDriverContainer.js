import { acceptPoint, rejectPoint, sortPoints } from '../state/actions/pointActions';
import { addLine, removeLine, clearLines } from '../state/actions/lineActions';
import {
  setGetStartPoint,
  setSortPoints,
  setAddNextPoint,
  setFixRightTurn,
  setDone,
} from '../state/actions/scanStepActions';
import { activateScan } from '../state/actions/scanIsActiveActions';
import connectWithStore from '../state/store/connectWithStore';

import GrahamScanDriverContainer from './GrahamScanDriverContainer';

const mapStateToProps = state => ({
  points: state.points,
  lines: state.lines,
  isActive: state.scanIsActive,
  step: state.scanStep,
});

export default connectWithStore(mapStateToProps, {
  acceptPoint,
  rejectPoint,
  sortPoints,
  addLine,
  removeLine,
  clearLines,
  activateScan,
  setGetStartPoint,
  setSortPoints,
  setAddNextPoint,
  setFixRightTurn,
  setDone,
})(GrahamScanDriverContainer);
