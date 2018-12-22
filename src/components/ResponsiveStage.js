/**
 * @fileoverview We make the canvas responsive in the sense that the viewbox becomes
 * smaller to fit the users screen. We do this since if we shrunk the physical canvas,
 * then preserving aspect ratios would create a large blank space under the canvas on
 * smaller screens.
 *
 * Modeled after the demo shown here:
 *
 * https://konvajs.github.io/docs/sandbox/Responsive_Canvas.html
 */

import React, { Component } from 'react';
import { Stage } from 'react-konva';


class ResponsiveStage extends Component {
  // These values are only used as a reference to
  // calculate new sizes.
  defaultWidth = 1000;

  defaultHeight = window.innerHeight;

  state = {
    stageWidth: this.defaultWidth,
    stageHeight: this.defaultHeight,
    scale: 1,
  };

  resizeCanvas = () => {
    // Get width of parent
    const containerWidth = document.querySelector('#app').offsetWidth;
    // Calculate new scale with reference to default values
    const newScale = containerWidth / this.defaultWidth;

    this.setState({
      stageWidth: this.defaultWidth * newScale,
      scale: newScale,
    });
  }

  componentDidMount() {
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas);
  }

  render() {
    const { stageWidth, stageHeight, scale } = this.state;
    const { children, ...other } = this.props;
    return (
      <Stage
        {...other}
        width={stageWidth}
        height={stageHeight}
        scale={{ x: scale, y: scale }}
      >
        {children}
      </Stage>
    );
  }
}

export default ResponsiveStage;
