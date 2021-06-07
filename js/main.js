const MAX_SYMBOL = 140;
const line = 'aaaaa';

const getRandomNumber = function(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const resultRandomNumber = max > min ? randomNumber : Number(false);
  // console.log(resultRandomNumber);
  return resultRandomNumber;
};

getRandomNumber(0, 25);

const maxLenght = function(str, maxStrLenght) {
  const resultMaxLenght = str.lenght <= MAX_SYMBOL;
  // console.log(resultMaxLenght);
  return resultMaxLenght;
};

maxLenght(line, MAX_SYMBOL);
