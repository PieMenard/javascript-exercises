const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((total, a) => total + a,0);
};

const multiply = function(array) {
  return array.reduce((product,a) => product*a,1);
};

const power = function(x,y) {
	/*let result = 1;
  for (c=0; c < y;c++)
    result *= x;
    return result;*/
  return Math.pow(x, y);
};

const factorial = function(x) {
  let result = 1;
  for (let c = 1; c <= x;c++)
    result *= c;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
