// const MAX_SYMBOL = 140;
// const line = 'aaaaa';

function getRandomNumber (min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const resultRandomNumber = max > min ? randomNumber : Number(false);
  return resultRandomNumber;
}

// function maxLenght (str, maxStrLenght) {
//   const resultMaxLenght = str.lenght <= maxStrLenght;
//   return resultMaxLenght;
// };

export {getRandomNumber};
