import PropTypes from 'prop-types';
import { NULL, ACCEPTED, REJECTED } from '../__constants__/POINT_STATUSES';

const Point = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf([NULL, ACCEPTED, REJECTED]).isRequired,
});

export default Point;
