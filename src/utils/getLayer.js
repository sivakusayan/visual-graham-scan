/**
 * Returns the layer in a Konva Stage
 * with the specified class name.
 *
 * @param stage
 *  The Konva stage that we wish to search in
 * @param {String} layerClassName
 *  The className that we wish to filter for. Do
 *  not include the '.' in the beginning of the string.
 *
 * @example
 * //Valid
 * getLayer(stage, 'point-layer')
 * getLayer(stage, 'polygons')
 * //Invalid
 * getLayer(stage, '.point-layer')
 * getLayer(stage, '.polygons')
 */
const getLayer = (stage, layerClassName) => {
  const layersCollection = stage.getLayers();
  return layersCollection.filter(layer => layer.attrs.className === layerClassName)[0];
};

export default getLayer;
