import { 
  acceptPoint,
  rejectPoint,
  sortPoints,
} from '../state/actions/pointActions';
import { addLine, removeLine } from '../state/actions/lineActions';
import {
  setGetStartPoint,
  setSortPoints,
  setAddNextPoint,
  setFixRightTurn,
  setDone,
} from '../state/actions/scanStepActions';
import { deactivateScan } from '../state/actions/scanIsActiveActions';
import connectWithStore from '../state/store/connectWithStore';

import GrahamScanDriverContainer from './GrahamScanDriverContainer';

const mapStateToProps = state => ({
  points: state.points,
  isActive: state.scanIsActive,
  step: state.scanStep,
  isAuto: state.scanIsAuto,
});

export default connectWithStore(mapStateToProps, {
  acceptPoint,
  rejectPoint,
  sortPoints,
  addLine,
  removeLine,
  deactivateScan,
  setGetStartPoint,
  setSortPoints,
  setAddNextPoint,
  setFixRightTurn,
  setDone,
})(GrahamScanDriverContainer);
