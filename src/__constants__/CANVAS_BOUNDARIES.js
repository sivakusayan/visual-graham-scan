/**
 * @fileoverview Captures the windows initial size on load. Since the way Responsive Stage works ensures that
 * the canvas's coordinate system is frozen from the window's initial size, and never grows
 * large or smaller, we can use this value to spawn random points. See the ResponsiveStage component
 * for more information.
 */

export const CANVAS_WIDTH = window.innerWidth;
export const CANVAS_HEIGHT = window.innerHeight;
