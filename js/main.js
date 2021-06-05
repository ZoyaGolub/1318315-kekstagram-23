const MAX_SYMBOL = 140;
const line = 'aaaaa';

const getRandomNumber = function(min, max) {
  if (max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return false ;
  }
};

getRandomNumber(0, 43);

// console.log(getRandomNumber(-43, 12));

const maxLenght = function(_str, maxStrLenght) {
  if (maxStrLenght <= MAX_SYMBOL) {
    return true;
  } else {
    return false;
  }
};

maxLenght(line, MAX_SYMBOL);

// console.log(maxLenght(line, MAX_SYMBOL));
