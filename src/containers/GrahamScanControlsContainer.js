import connectWithStore from '../state/store/connectWithStore';

import { DONE } from '../__constants__/SCAN_STEPS';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../__constants__/CANVAS_BOUNDARIES';
import generatePoint from '../utils/generatePoint';
import { addPoint, clearPoints, resetPoints } from '../state/actions/pointActions';
import { clearLines } from '../state/actions/lineActions';
import GrahamScanControls from '../components/GrahamScanControls';

const mapStateToProps = state => ({
  points: state.points,
  isEditable: state.isEditable,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...ownProps,
  clearAll: () => {
    dispatchProps.clearPoints();
    dispatchProps.clearLines();
  },
  play: () => {
    const { step, deactivateAuto, startScan } = ownProps;

    // We don't want the user to play scan if there are no points
    if (stateProps.points.length < 1) return;

    // Setup for manual play
    deactivateAuto();

    // We use this check since we don't know if we are starting the
    // scan from the beginning, or if we are switching from auto to
    // manual mid-scan. We do this check to startScan if there is no
    // scan taking place.
    if (step === DONE) {
      // Clear board for new scan
      dispatchProps.resetPoints();
      dispatchProps.clearLines();
      startScan();
    }
  },
  playAuto: () => {
    const { step, activateAuto, startScan } = ownProps;
    // We don't want the user to play scan if there are no points
    if (stateProps.points.length < 1) return;

    // Setup for auto play
    activateAuto();

    // We use this check since we don't know if we are starting the
    // scan from the beginning, or if we are switching from manual to
    // auto mid-scan. We do this check to startScan if there is no
    // scan taking place.
    if (step === DONE) {
      // Clear board for new scan
      dispatchProps.resetPoints();
      dispatchProps.clearLines();
      startScan();
    }
  },
  generatePoints: () => {
    const POINT_COUNT = 50;
    dispatchProps.clearPoints();
    dispatchProps.clearLines();

    for (let i = 0; i < POINT_COUNT; i += 1) {
      const point = generatePoint(CANVAS_WIDTH, CANVAS_HEIGHT);
      dispatchProps.addPoint(point);
    }
  },
});

export default connectWithStore(mapStateToProps, {
  addPoint,
  clearPoints,
  resetPoints,
  clearLines,
}, mergeProps)(GrahamScanControls);
