import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Ellipse } from 'react-konva';
import POINT_CONFIG from '../../__constants__/POINT_CONFIG';
import Point from '../../propTypes/Point';

const PointLayer = ({ points = [], scale }) => (
  <Layer>
    {points.map(point => (
      <Ellipse
        x={point.x}
        y={point.y}
        name={point.name}
        radius={{
          x: POINT_CONFIG.RADIUS / scale,
          y: POINT_CONFIG.RADIUS,
        }}
        fill={POINT_CONFIG.GET_FILL(point.status)}
        key={point.name}
      />
    ))}
  </Layer>
);

PointLayer.propTypes = {
  points: PropTypes.arrayOf(Point),
};

PointLayer.defaultProps = {
  points: [],
};

export default PointLayer;
