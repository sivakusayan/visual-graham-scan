import { addPoint, resetPoints } from '../state/actions/pointActions';
import { clearLines } from '../state/actions/lineActions';
import InteractiveStage from '../components/InteractiveStage';
import connectWithStore from '../state/store/connectWithStore';
import rescaleCoordinates from '../utils/rescaleCoordinates';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../__constants__/CANVAS_BOUNDARIES';

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
    // Prevent calling this twice on mobile due to tap events being converted to click events.
    event.evt.preventDefault();
    const { isEditable, didScan } = stateProps;
    const {
      addPoint,
      resetPoints,
      clearLines,
    } = dispatchProps;

    if (isEditable) {
      // Use additional didScan check to make sure we clear only if we just finished a scan.
      if (didScan) {
        resetPoints();
        clearLines();
      }
      const stage = event.target;
      const pointerPosition = stage.getPointerPosition();
      const point = rescaleCoordinates(stage, pointerPosition);

      // Use this check to make sure that the mobile user can't touch the screen then slide off
      // the canvas to get a point that is under the UI. We use the fact that our canvas coordinate
      // system is frozen on load. See the ResponsiveStage component for more information on how this works.
      if (point.x > CANVAS_WIDTH || point.y > CANVAS_HEIGHT) return;

      addPoint(point);
    }
  },
});

export default connectWithStore(mapStateToProps, {
  addPoint,
  resetPoints,
  clearLines,
}, mergeProps)(InteractiveStage);
