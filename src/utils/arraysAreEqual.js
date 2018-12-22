// import equal from 'deep-equal';
const equal = require('deep-equal');

/**
 * Checks if two arrays have the same data in
 * the same indices. Returns true if the arrays
 * are equal in the above sense, and false if
 * not. Deep checks for equality of objects.
 */
const arraysAreEqual = (arr1, arr2) => {
  let areEqual = true;

  if (arr1.length !== arr2.length) {
    areEqual = false;
  } else {
    arr1.some((e1, index) => {
      if (!equal(e1, arr2[index])) {
        areEqual = false;
        return true;
      }
      return false;
    });
  }

  return areEqual;
};

export default arraysAreEqual;
