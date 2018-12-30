/**
 * @fileoverview We make the canvas responsive only horizontally for now, although
 * vertical responsiveness should be implemented soon. We don't shrink the horizontal
 * and vertical by the same scales to preserve aspect ratios since that would create a
 * large blank space under the canvas on smaller screens.
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
  defaultWidth = window.innerWidth;

  defaultHeight = window.innerHeight * 0.8;

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
    window.addEventListener('deviceorientation', () => {
      this.setState({
        stageHeight: window.innerHeight * 0.8,
      });
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
        scale={{ x: scale }}
      >
        { children.map(child => React.cloneElement(child, { scale })) }
      </Stage>
    );
  }
}

export default ResponsiveStage;
