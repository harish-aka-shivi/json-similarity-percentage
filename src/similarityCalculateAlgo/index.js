import { INVALID_JSON } from './errorMessages';

const INITIAL_SCORE = 100;

const compareObjectsAlgorithm = (obj1, obj2, multiplier) => {
  // handle null if any one of the values is null
  if (obj1 === obj2) {
    return 1 * multiplier;
  }

  if (obj1 === null || obj2 === null) {
    return 0;
  }

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  // if one of the value is array and other is object
  // then take care where the same value can be represented for this check
  // for example: {"a": {"0": 0}} and {"a": [0]} => to prevent these cases
  if ((Array.isArray(obj1) && !Array.isArray(obj2))
    || (Array.isArray(obj2) && !Array.isArray(obj1))) {
    return 0;
  }

  // Find object with higher number of keys
  const largerObject = obj1Keys.length > obj2Keys.length ? obj1 : obj2;
  const smallerObject = obj1Keys.length <= obj2Keys.length ? obj1 : obj2;

  let objectSimilarScore = INITIAL_SCORE;

  const perKeyPercentage = INITIAL_SCORE / Object.keys(largerObject).length;

  // comparing values against the larger object because
  // comparing smaller values may give false positive
  Object.keys(largerObject).forEach(key1 => {
    const valueOfLargerObject = largerObject[key1];
    const valueOfSmallerObject = smallerObject[key1];

    // Assuming that values of different type are different
    // So "0" and 0 have no similarity
    if (typeof valueOfLargerObject !== typeof valueOfSmallerObject) {
      // subtract the perKeyPercentage from 100
      objectSimilarScore -= perKeyPercentage;
      return;
    }

    // This will handles the arrays also because arrays are objects internally
    // In case of arrays we are comparing with respect to indexes
    if (typeof valueOfLargerObject === 'object') {
      // get the sub-object similarity percentage value and subtract the difference
      // of this value and per key value from 100
      const similarityPercentageOfSubObject = compareObjectsAlgorithm(
        valueOfLargerObject, valueOfSmallerObject, perKeyPercentage,
      );
      objectSimilarScore -= perKeyPercentage - similarityPercentageOfSubObject;
      return;
    }

    if (valueOfLargerObject !== valueOfSmallerObject) {
      // subtract the value of perKeyPercentage from 100
      objectSimilarScore -= perKeyPercentage;
    }
  });

  // Divide the value with 100 to get the value between 0 and 1
  return (objectSimilarScore * multiplier) / INITIAL_SCORE;
};

// Similarity store
const calculateSimilarity = (json1, json2) => {
  // check whether both json are valid. if not let the users know
  // parse both json
  let obj1;
  let obj2;
  try {
    obj1 = JSON.parse(json1);
    obj2 = JSON.parse(json2);
  } catch (error) {
    console.log(INVALID_JSON);
    return INVALID_JSON;
  }

  return compareObjectsAlgorithm(obj1, obj2, 1);
};

export default calculateSimilarity;
