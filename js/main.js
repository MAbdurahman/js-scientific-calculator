



//**************** Variables ****************//
const MAX_LENGTH = 9;
const NUMBER_DECIMAL_FOUR_PLACES = /^[- +]?[\d]+?(\.\d{0,4})?$/;
const E = 2.718281828459045;
const PI = 3.141592653589793;
const PHI = 1.618033988749895;
const DIVIDE_BY_ZERO = 'Undefined';
const UNREAL_NUMBER = 'Unreal Number';



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





function HCF(u, v) {
  var U = u, V = v
  while (true) {
    if (!(U%=V)) return V
    if (!(V%=U)) return U
  }
}
//convert a decimal into a fraction
function fraction(decimal){
  
  if(!decimal){
    decimal=this;
  }
  whole = String(decimal).split('.')[0];
  decimal = parseFloat("."+String(decimal).split('.')[1]);
  num = "1";
  for(z=0; z<String(decimal).length-2; z++){
    num += "0";
  }
  decimal = decimal*num;
  num = parseInt(num);
  for(z=2; z<decimal+1; z++){
    if(decimal%z==0 && num%z==0){
      decimal = decimal/z;
      num = num/z;
      z=2;
    }
  }
  //if format of fraction is xx/xxx
  if (decimal.toString().length == 2 &&
    num.toString().length == 3) {
    //reduce by removing trailing 0's
    decimal = Math.round(Math.round(decimal)/10);
    num = Math.round(Math.round(num)/10);
  }
  //if format of fraction is xx/xx
  else if (decimal.toString().length == 2 &&
    num.toString().length == 2) {
    decimal = Math.round(decimal/10);
    num = Math.round(num/10);
  }
  //get highest common factor to simplify
  var t = HCF(decimal, num);
  
  //return the fraction after simplifying it
  return ((whole==0)?"" : whole+" ")+decimal/t+"/"+num/t;
}

let results = fraction(0.333);

console.log(results);