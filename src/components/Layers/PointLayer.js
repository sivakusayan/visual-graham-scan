import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Ellipse } from 'react-konva';
import POINT_CONFIG from '../../__constants__/POINT_CONFIG';
import Point from '../../propTypes/Point';

const PointLayer = ({ points = [], scale }) => (
  <Layer>
    {points.map(point => (
      <Ellipse
        {...POINT_CONFIG}
        x={point.x}
        y={point.y}
        name={point.name}
        radius={{
          x: POINT_CONFIG.RADIUS / scale.x,
          y: POINT_CONFIG.RADIUS / scale.y,
        }}
        fillLinearGradientColorStops={POINT_CONFIG.GET_GRADIENT_FILL(point.status)}
        stroke={POINT_CONFIG.GET_STROKE(point.status)}
        key={point.name}
      />
    ))}
  </Layer>
);

PointLayer.propTypes = {
  points: PropTypes.arrayOf(Point),
  scale: PropTypes.number,
};

PointLayer.defaultProps = {
  points: [],
  scale: 1,
};

export default PointLayer;
