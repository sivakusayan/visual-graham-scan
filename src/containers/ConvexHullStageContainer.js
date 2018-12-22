import { connect } from 'react-redux';

import {
  addPoint,
  clearPoints,
} from '../state/actions/pointActions';
import ConvexHullStage from '../components/ConvexHullStage';

export default connect(
  null,
  {
    addPoint,
    clearPoints,
  },
)(ConvexHullStage);
