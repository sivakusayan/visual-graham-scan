import {
  addPoint,
  clearPoints,
} from '../state/actions/pointActions';
import { clearLines } from '../state/actions/lineActions';
import InteractiveStage from '../components/InteractiveStage';
import connectWithStore from '../state/store/connectWithStore';

export default connectWithStore(
  null,
  {
    addPoint,
    clearPoints,
    clearLines,
  },
)(InteractiveStage);
