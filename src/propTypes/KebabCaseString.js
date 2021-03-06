/**
 * Checks if a passed in string is in kebab case. The string should contain
 * no spaces and all letters should be lowercase.
 *
 * Idea taken from: https://medium.com/@jaebradley/custom-react-prop-type-validation-8b48dc3a156
 */
const KebabCaseString = (props, propName, componentName) => {
  const value = props[propName];

  if (value == null || (typeof value === 'string' && value.replace(/[A-Z\s]/g, '') === value)) return null;

  return new TypeError(`Invalid KebabCaseString Prop Value: ${value} for ${propName} in ${componentName}`);
};

export default KebabCaseString;
