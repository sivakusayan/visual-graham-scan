import { acceptPoint, rejectPoint } from '../state/actions/pointActions';
import { addLine, removeLine, clearLines } from '../state/actions/lineActions';
import * as setStep from '../state/actions/scanStepActions';
import { activateScan } from '../state/actions/scanIsActiveActions';
import connectWithStore from '../state/store/connectWithStore';

import GrahamScanDriverContainer from './GrahamScanDriverContainer';

const mapStateToProps = state => ({
  points: state.points,
  lines: state.lines,
  isActive: state.scanIsActive,
  step: state.scanStep,
});

const mapDispatchToProps = dispatch => ({
  acceptPoint: name => dispatch(acceptPoint(name)),
  rejectPoint: name => dispatch(rejectPoint(name)),
  addLine: (startPoint, endPoint) => dispatch(addLine(startPoint, endPoint)),
  removeLine: name => dispatch(removeLine(name)),
  clearLines: () => dispatch(clearLines()),
  activateScan: () => dispatch(activateScan()),
  setStep: {
    getStartPoint: () => dispatch(setStep.getStartPoint()),
    sortPoints: () => dispatch(setStep.sortPoints()),
    addNextPoint: () => dispatch(setStep.addNextPoint()),
    fixRightTurn: () => dispatch(setStep.fixRightTurn()),
    done: () => dispatch(setStep.done()),
  },
});


export default connectWithStore(mapStateToProps, mapDispatchToProps)(GrahamScanDriverContainer);
