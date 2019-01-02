import { addPoint } from '../state/actions/pointActions';
import InteractiveStage from '../components/InteractiveStage';
import connectWithStore from '../state/store/connectWithStore';
import rescaleCoordinates from '../utils/rescaleCoordinates';

const mapStateToProps = state => ({
  pointCount: state.points.length,
  isEditable: state.isEditable,
});

const mapDispatchToProps = dispatch => ({
  onStageClick: (event) => {
    const stage = event.target;
    const pointerPosition = stage.getPointerPosition();

    const point = rescaleCoordinates(stage, pointerPosition);

    dispatch(addPoint(point));
  },
});

export default connectWithStore(mapStateToProps, mapDispatchToProps)(InteractiveStage);
