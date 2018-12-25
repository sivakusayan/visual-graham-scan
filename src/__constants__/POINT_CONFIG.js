/**
 * @fileoverview Contains configuration data for how points are displayed on
 * the stage.
 */

import { NULL, ACCEPTED, REJECTED } from './POINT_STATUSES';

export default {
  RADIUS: 20,
  GET_FILL: (status) => {
    if (status === ACCEPTED) return 'green';
    if (status === REJECTED) return 'red';
    if (status === NULL) return 'black';
  },
};
