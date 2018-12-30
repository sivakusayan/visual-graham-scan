import {
  addPoint,
  clearPoints,
  resetPoints,
} from '../state/actions/pointActions';
import { clearLines } from '../state/actions/lineActions';
import { activateScan } from '../state/actions/scanIsActiveActions';
import InteractiveStage from '../components/InteractiveStage';
import connectWithStore from '../state/store/connectWithStore';

const mapStateToProps = state => ({
  pointCount: state.points.length,
  scanStep: state.scanStep,
});

export default connectWithStore(mapStateToProps, {
  addPoint,
  resetPoints,
  clearPoints,
  clearLines,
  activateScan,
})(InteractiveStage);
