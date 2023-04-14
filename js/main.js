



//**************** Variables ****************//
const MAX_LENGTH = 9;
const number_decimal_four_places = /^[- +]?[\d]+?(\.\d{0,4})?$/;
const E = 2.718281828459045;
const PI = 3.141592653589793;
const PHI = 1.618033988749895;


function getPercentage(number) {
  return (number / 100);
}

function getLogBaseN (n, base) {
  return (Math.log(n) / Math.log(base));
};


function getLogBaseTen (n) {
  const base = 10;
  return Math.round(Math.log(n) / Math.log(base));
}

function getNaturalLog(n) {
  return Math.log(n);
}

function getXToYPower(x, y) {
  return Math.pow(x, y);
}

function getNumberSquared (n) {
  return (n**2);
}

function getSquareRootNumber (n) {
  return (Math.sqrt(n));
}

function getNumberInverse (n) {
  return (1 / n);
}

function degreesToRadians (degrees) {
  return (degrees * Math.PI * 180 ** -1);
}
function radiansToDegrees (radians) {
  return (radians * 180 * Math.PI ** -1);
}

function getSine(number) {
  return (Math.sin(number))
}

function getCosine (number) {
  return (Math.cos(number));
}

function getTangent (number) {
  return (Math.tan(number));
}

function getSineInverseRadians (sine) {
  return (Math.sin(degreesToRadians(sine)).toFixed(4) * 1);
}

function getCosineInverseRadians (cosine) {
  return (Math.cos(degreesToRadians(cosine)).toFixed(4) * 1);
}

function getTangentInverseRadians (tangent) {
  return (Math.tan(degreesToRadians(tangent)).toFixed(4) * 1);
}

function getSineInverseDegrees (sine) {
  return (radiansToDegrees(Math.asin(sine)).toFixed(4) * 1);
}

function getCosineInverseDegrees (cosine) {
  return (radiansToDegrees(Math.acos(cosine)).toFixed(4) * 1);
}

function getTangentInverseDegrees (tangent) {
  return (radiansToDegrees(Math.atan(tangent)).toFixed(4) * 1);
}

function addNumber(value, number) {
  return (value + number);
}
function subtractNumber(value, number) {
  return (value - number);
}

function multiplyNumber (value, number) {
  return (value * number);
}
function divideNumber (value, number) {
  if (number === 0) {
    return 'undefined';
    
  } else {
    return (value / number);
  }
}

let num = subtractNumber(25, 5);

console.log(E * 5);
console.log(Math.E);
console.log(num);