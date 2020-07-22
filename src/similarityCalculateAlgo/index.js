import { INVALID_JSON } from './errorMessages';

const INITIAL_SCORE = 100;

const compareObjectsAlgorithm = (obj1, obj2, multiplier) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

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
