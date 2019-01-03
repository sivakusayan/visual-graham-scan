import connectWithStore from '../state/store/connectWithStore';

import { DONE } from '../__constants__/SCAN_STEPS';
import { clearPoints, resetPoints } from '../state/actions/pointActions';
import { clearLines } from '../state/actions/lineActions';
import { activateEdits, deactivateEdits } from '../state/actions/isEditableActions';
import GrahamScanControls from '../components/GrahamScanControls';

const mapStateToProps = state => ({
  points: state.points,
  isEditable: state.isEditable,
});

const mapDispatchToProps = dispatch => ({
  clearPoints: () => dispatch(clearPoints()),
  resetPoints: () => dispatch(resetPoints()),
  activateEdits: () => dispatch(activateEdits()),
  deactivateEdits: () => dispatch(deactivateEdits()),
  resetCanvas: () => {
    dispatch(clearLines());
    dispatch(resetPoints());
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...ownProps,
  clearPoints: dispatchProps.clearPoints,
  activateEdits: () => {
    dispatchProps.resetCanvas();
    dispatchProps.activateEdits();
  },
  play: () => {
    const { step, deactivateAuto, startScan } = ownProps;

    // We don't want the user to play scan if there are no points
    if (stateProps.points.length < 1) return;

    // Setup for manual play
    dispatchProps.deactivateEdits();
    deactivateAuto();

    // We use this check since we don't know if we are starting the
    // scan from the beginning, or if we are switching from auto to
    // manual mid-scan. We do this check to startScan if there is no
    // scan taking place.
    if (step === DONE) {
      // Clear board for new scan
      dispatchProps.resetCanvas();
      startScan();
    }
  },
  playAuto: () => {
    const { step, activateAuto, startScan } = ownProps;
    // We don't want the user to play scan if there are no points
    if (stateProps.points.length < 1) return;

    // Setup for auto play
    dispatchProps.deactivateEdits();
    activateAuto();

    // We use this check since we don't know if we are starting the
    // scan from the beginning, or if we are switching from manual to
    // auto mid-scan. We do this check to startScan if there is no
    // scan taking place.
    if (step === DONE) {
      // Clear board for new scan
      dispatchProps.resetCanvas();
      startScan();
    }
  },
});

export default connectWithStore(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(GrahamScanControls);
