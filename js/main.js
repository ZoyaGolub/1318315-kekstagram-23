const MAX_SYMBOL = 140;
const line = 'aaaaa';

const getRandomNumber = function(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const resultNumber = max > min ? randomNumber : Number(false);
  //console.log(result);
  return resultNumber;
  // if (max > min) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // } else {
  //   return false;
  // }
};

getRandomNumber(100, 43);

const maxLenght = function(_str, maxStrLenght) {
  const resultMaxLenght = maxStrLenght <= MAX_SYMBOL ? 'ok' : 'bad';
  // console.log(resultMaxLenght);
  return resultMaxLenght;
  // if (maxStrLenght <= MAX_SYMBOL) {
  //   return true;
  // } else {
  //   return false;
  // }
};

maxLenght(line, MAX_SYMBOL);
