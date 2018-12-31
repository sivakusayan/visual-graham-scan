/**
 * Adjusts the coordinates so that they agree with the scale of the
 * Konva stage. Without this, objects may not be spawned at the
 * pointer location that we might expect.
 *
 * @param stage
 *  The stage that we wish to adjust the coordinates relative to
 * @param {[Number, Number]} coordinates
 *  A single number which should represent either the x-value or
 *  y-value on the canvas.
 *
 * @return {[Number, Number]}
 *  The rescaled coordinates
 */
const rescaleCoordinates = (stage, coordinates) => ({
  x: coordinates.x / stage.attrs.scaleX,
  y: coordinates.y / stage.attrs.scaleY,
})

export default rescaleCoordinates;
