import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Line } from 'react-konva';
import LINE_CONFIG from '../../__constants__/LINE_CONFIG';
import { ERROR } from '../../__constants__/LINE_STATUSES';
import Point from '../../propTypes/Point';

const LineLayer = ({ lines = [] }) => (
  <Layer>
    {lines.map(line => (
      <Line
        {...LINE_CONFIG}
        x={0}
        y={0}
        points={[line.startPoint.x, line.startPoint.y, line.endPoint.x, line.endPoint.y]}
        hitGraphEnabled={false}
        stroke={LINE_CONFIG.GET_STROKE(line)}
        dashEnabled={line.status === ERROR}
        key={line.name}
      />
    ))}
  </Layer>
);

LineLayer.propTypes = {
  lines: PropTypes.arrayOf({
    startPoint: Point.isRequired,
    endPoint: Point.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

LineLayer.defaultProps = {
  lines: [],
};

export default LineLayer;
