
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = "Bria" ;

//create a number variable, it an be any number
let newNum = 28 ;

//create a boolean variable
let newBool = true ;

//solve the following math problem
let newSubtract = 10 - 5 === 5;

//Solve the following math problem
let newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
let newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  let String = (str)
  return String
  //simply return the string provided: str
}

function add(x, y) {
  let sum = (x + y)
  return sum
  // x and y are numbers
  // add x and y together and return the value
  // code here
}

function subtract(x, y) {
  let remainder = (x - y)
  return remainder
  // subtract y from x and return the value
  // code here
}

function multiply(x, y) {
  let product = (x * y)
  return product
  // multiply x by y and return the value
  // code here
}

function divide(x, y) {
  let quotient = (x / y)
  return quotient
  // divide x by y and return the value
  // code here
}

function areEqual(x, y) {
if (x = y) = true{
  return true;
}
  return false;
  // return true if x and y are the same
  // otherwise return false
  // code here
}

function areSameLength(str1, str2) {
  if (str1 = str2) = true{
    return true;
  }
  return false;
  // return true if the two strings have the same length
  // otherwise return false
  // code here
}

function lessThanNinety(num) {
  if (num < 90) = true{
    return true;
  }
  return false;
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
}

function greaterThanFifty(num) {
  if (num > 50) = true{
    return true;
  }
  return false;
  // return true if num is greater than fifty
  // otherwise return false
  // code here
}

function getRemainder(x, y) {
  function Remainder (x / y);
  return Remainder
  // return the remainder from dividing x by y
  // code here
}

function isEven(num) {
  if isEven(num) = true{
    return true;
  }
  return false;
  // return true if num is even
  // otherwise return false
  // code here
}

function isOdd(num) {
  if isOdd(num) = true{
    return true;
  }
  return false;
  // return true if num is false
  // otherwise return false
  // code here
}

function square(num) {
  let square = (num x num)
  return square
  // square num and return the new value
  // hint: NOT square root!
  // code here
}

function cube(num) {
  let cube = (num * num * num)
  // cube num and return the new value
  // code here
}

function raiseToPower(num, exponent) {
  Math.pow(num, exponent)
  return Math.pow
  // raise num to whatever power is passed in as exponent
  // code here
}

function roundNumber(num) {
  Math.round(num)
  return Math.round
  // round num and return it
  // code here
}

function roundUp(num) {
  Math.ceil(num)
  return Math.ceil
  // round num up and return it
  // code here
}

function addExclamationPoint(str) {
  let str = str!
      return str
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
}

function combineNames(firstName, lastName) {
  let Name = $(firstName) + $(lastName)
  return Name
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
}

function getGreeting(name) {
  let Greeting = ("Hello $name!")
  return Greeting
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  let area = (length * width)
  return area
  // return the area of the rectangle by using length and width
  // code here
}

function getTriangleArea(base, height) {
  let area = 0.5 * (base) * height
  // return the area of the triangle by using base and height
  // code here
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString: newString,
  newNum: newNum,
  newBool: newBool,
  newSubtract: newSubtract,
  newMultiply: newMultiply,
  newModulo: newModulo,
  returnString: returnString,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea
};
