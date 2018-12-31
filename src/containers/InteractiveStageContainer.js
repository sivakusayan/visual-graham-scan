import {
  addPoint,
  clearPoints,
  resetPoints,
} from '../state/actions/pointActions';
import { clearLines } from '../state/actions/lineActions';
import { activateScan } from '../state/actions/scanIsActiveActions';
import { activateAuto, deactivateAuto } from '../state/actions/scanIsAutoActions';
import InteractiveStage from '../components/InteractiveStage';
import connectWithStore from '../state/store/connectWithStore';
import rescaleCoordinates from '../utils/rescaleCoordinates';

const mapStateToProps = state => ({
  pointCount: state.points.length,
  scanStep: state.scanStep,
  isActive: state.scanIsActive,
  isAuto: state.scanIsAuto,
});

const mapDispatchToProps = dispatch => ({
  onStageClick: (event) => {
    const stage = event.target;
    const pointerPosition = stage.getPointerPosition();

    const point = rescaleCoordinates(stage, pointerPosition);

    dispatch(addPoint(point));
  },
  resetCanvas: () => {
    dispatch(clearLines());
    dispatch(resetPoints());
  },
  clearPoints: () => dispatch(clearPoints()),
  activateScan: () => dispatch(activateScan()),
  activateAuto: () => dispatch(activateAuto()),
  deactivateAuto: () => dispatch(deactivateAuto()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  startScan: () => {
    if (stateProps.pointCount < 1) return;
    dispatchProps.resetCanvas();
    dispatchProps.activateScan();
  },
});

export default connectWithStore(mapStateToProps, mapDispatchToProps, mergeProps)(InteractiveStage);
