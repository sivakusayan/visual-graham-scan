import { 
  acceptPoint,
  rejectPoint,
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
import connectWithStore from '../state/store/connectWithStore';

import GrahamScanDriverContainer from './GrahamScanDriverContainer';

const mapStateToProps = state => ({
  points: state.points,
  isActive: state.scanIsActive,
  step: state.scanStep,
});

export default connectWithStore(mapStateToProps, {
  acceptPoint,
  rejectPoint,
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
})(GrahamScanDriverContainer);
