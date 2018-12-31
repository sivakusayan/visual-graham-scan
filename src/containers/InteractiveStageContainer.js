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

const mapStateToProps = state => ({
  pointCount: state.points.length,
  scanStep: state.scanStep,
  isActive: state.scanIsActive,
  isAuto: state.scanIsAuto,
});

export default connectWithStore(mapStateToProps, {
  addPoint,
  resetPoints,
  clearPoints,
  clearLines,
  activateScan,
  activateAuto,
  deactivateAuto,
})(InteractiveStage);
