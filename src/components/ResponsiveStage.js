/**
 * @fileoverview A responsive wrapper around Konva Stage. We don't shrink the horizontal
 * and vertical by the same scales to preserve aspect ratios since that would create a
 * large blank space under the canvas on smaller screens.
 *
 * Idea modeled after the demo shown here:
 *
 * https://konvajs.github.io/docs/sandbox/Responsive_Canvas.html
 */

import React, { Component } from 'react';
import { Stage } from 'react-konva';


class ResponsiveStage extends Component {
  // Note: Notice how even though we use the incorrect size here,
  // the stage gets immediately resized anyway, so choosing window
  // sizes has no real impact on the UI. Instead, one should think
  // of this as fixing a coordinate system on the canvas, due to how
  // the responsiveness of this wrapper works.
  //
  // See CANVAS_BOUNDARIES in src/_constants_/CANVAS_BOUNDARIES
  // and generatePoint in src/utils/generatePoint for more context.
  defaultWidth = window.innerWidth;

  defaultHeight = window.innerHeight;

  state = {
    stageWidth: this.defaultWidth,
    stageHeight: this.defaultHeight,
    scale: {
      x: 1,
      y: 1,
    },
  };

  componentDidMount() {
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas);
    window.addEventListener('orientationchange', this.resizeCanvas);
    window.addEventListener('fullscreenchange', this.resizeCanvas);
  }

  resizeCanvas = () => {
    // Get width of parent
    const containerWidth = document.querySelector('.stage').offsetWidth;
    const containerHeight = document.querySelector('.stage').offsetHeight;
    // Calculate new scale with reference to default values
    const xScale = containerWidth / this.defaultWidth;
    const yScale = containerHeight / this.defaultHeight;

    this.setState({
      stageWidth: this.defaultWidth * xScale,
      stageHeight: this.defaultHeight * yScale,
      scale: {
        x: xScale,
        y: yScale,
      }
    });
  }

  render() {
    const { stageWidth, stageHeight, scale } = this.state;
    const { children, ...other } = this.props;
    return (
      <Stage
        {...other}
        width={stageWidth}
        height={stageHeight}
        scale={scale}
      >
        { children.map(child => React.cloneElement(child, { scale })) }
      </Stage>
    );
  }
}

export default ResponsiveStage;
