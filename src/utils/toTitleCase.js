/**
 * Takes a string in kebab case and converts it to
 * title case.
 */
const toTitleCase = str => str.split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

export default toTitleCase;
