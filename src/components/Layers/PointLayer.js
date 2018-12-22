import React from 'react';
import { Layer, Circle } from 'react-konva';
import POINT_CONFIG from '../../constants/POINT_CONFIG';

const PointLayer = ({ points }) => (
  <Layer>
    {points.map(point => (
      <Circle
        x={point.x}
        y={point.y}
        id={point.id}
        radius={POINT_CONFIG.RADIUS}
        fill={POINT_CONFIG.GET_FILL(point.status)}
      />
    ))}
  </Layer>
);

export default PointLayer;