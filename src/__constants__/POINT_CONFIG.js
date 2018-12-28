/**
 * @fileoverview Contains configuration data for how points are displayed on
 * the stage.
 */

import { NULL, ACCEPTED, REJECTED } from './POINT_STATUSES';

export default {
  RADIUS: 7,
  GET_FILL: (status) => {
    if (status === ACCEPTED) return '#ACC196';
    if (status === REJECTED) return '#511730';
    if (status === NULL) return '#14080E';
  },
};
