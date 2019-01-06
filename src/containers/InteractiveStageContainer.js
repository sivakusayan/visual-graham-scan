import { addPoint, resetPoints } from '../state/actions/pointActions';
import { clearLines } from '../state/actions/lineActions';
import InteractiveStage from '../components/InteractiveStage';
import connectWithStore from '../state/store/connectWithStore';
import rescaleCoordinates from '../utils/rescaleCoordinates';

const mapStateToProps = state => ({
  pointCount: state.points.length,
  isEditable: state.isEditable,
  didScan: state.lines.length > 0,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onStageClick: (event) => {
    const { isEditable, didScan } = stateProps;
    const {
      addPoint,
      resetPoints,
      clearLines,
    } = dispatchProps;

    if (isEditable) {
      // Use additional didScan check to make sure we don't
      if (didScan) {
        resetPoints();
        clearLines();
      }
      const stage = event.target;
      const pointerPosition = stage.getPointerPosition();

      const point = rescaleCoordinates(stage, pointerPosition);
      console.log('Pointer Position: ', pointerPosition);
      console.log('Point: ', point);

      addPoint(point);
    }
  },
});

export default connectWithStore(mapStateToProps, {
  addPoint,
  resetPoints,
  clearLines,
}, mergeProps)(InteractiveStage);
