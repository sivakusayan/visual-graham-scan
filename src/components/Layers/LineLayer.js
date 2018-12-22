import React from 'react';
import { Layer, Line } from 'react-konva';
import LINE_CONFIG from '../../constants/LINE_CONFIG';

const LineLayer = ({ lines }) => (
  <Layer>
    {lines.map(line => (
      <Line
        x={0}
        y={0}
        stroke={LINE_CONFIG.STROKE}
        points={[line.startPoint.x, line.startPoint.y, line.endPoint.x, line.endPoint.y]}
      />
    ))}
  </Layer>
);

export default LineLayer;