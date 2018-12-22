import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Circle } from 'react-konva';
import POINT_CONFIG from '../../constants/POINT_CONFIG';
import Point from '../../propTypes/Point';

const PointLayer = ({ points = [] }) => (
  <Layer>
    {points.map(point => (
      <Circle
        x={point.x}
        y={point.y}
        id={point.id}
        radius={POINT_CONFIG.RADIUS}
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
