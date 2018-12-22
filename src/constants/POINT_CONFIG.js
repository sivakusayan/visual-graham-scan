/**
 * @fileoverview Contains configuration data for how points are displayed on
 * the stage.
 */

export default {
  RADIUS: 20,
  GET_FILL: (status) => {
    if (status === 'ACCEPTED') return 'green';
    if (status === 'REJECTED') return 'red';
    return 'blue';
  },
};
