import connectWithStore from '../state/store/connectWithStore';

import { DONE } from '../__constants__/SCAN_STEPS';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../__constants__/CANVAS_BOUNDARIES';
import generatePoint from '../utils/generatePoint';
import { addPoint, clearPoints, resetPoints } from '../state/actions/pointActions';
import { clearLines } from '../state/actions/lineActions';
import PreparationControls from '../components/PreparationControls';

const mapStateToProps = state => ({
  points: state.points,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...ownProps,
  clearAll: () => {
    dispatchProps.clearPoints();
    dispatchProps.clearLines();
  },
  play: () => {
    const { deactivateAuto, startScan } = ownProps;

    // Setup for manual play
    deactivateAuto();

    // Clear board for new scan
    dispatchProps.resetPoints();
    dispatchProps.clearLines();
    startScan();
  },
  playAuto: () => {
    const { activateAuto, startScan } = ownProps;

    // Setup for auto play
    activateAuto();

    dispatchProps.resetPoints();
    dispatchProps.clearLines();
    startScan();
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
  switchMode: () => {
    const { isAuto, activateAuto, deactivateAuto } = ownProps;
    if (isAuto) {
      deactivateAuto();
    } else {
      activateAuto();
    }
  },
});

export default connectWithStore(mapStateToProps, {
  addPoint,
  clearPoints,
  resetPoints,
  clearLines,
}, mergeProps)(PreparationControls);
