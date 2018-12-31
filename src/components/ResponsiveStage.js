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
  // These values are only used as a reference to
  // calculate new sizes.
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
    window.addEventListener('deviceorientation', this.resizeCanvas);
  }

  resizeCanvas = () => {
    // Get width of parent
    const containerWidth = document.querySelector('#app').offsetWidth;
    const containerHeight = document.querySelector('#app').offsetHeight;
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
