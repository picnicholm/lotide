const eqObjects = function (object1, object2) {

  let obj1 = Object.keys(object1)
  let obj2 = Object.keys(object2)
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let key of obj1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } 
  }
  return true
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' })

module.exports = assertObjectsEqual;

