import {
  addPoint,
  clearPoints,
} from '../state/actions/pointActions';
import { clearLines } from '../state/actions/lineActions';
import InteractiveStage from '../components/InteractiveStage';
import connectWithStore from '../state/store/connectWithStore';

const mapStateToProps = state => ({
  pointCount: state.points.length,
  scanIsActive: state.scanIsActive,
});

export default connectWithStore(mapStateToProps, {
  addPoint,
  clearPoints,
  clearLines,
})(InteractiveStage);
