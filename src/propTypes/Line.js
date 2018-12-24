import PropTypes from 'prop-types';
import Point from './Point';

const Line = PropTypes.shape({
  startPoint: Point.isRequired,
  endPoint: Point.isRequired,
  name: PropTypes.string.isRequired,
});

export default Line;
