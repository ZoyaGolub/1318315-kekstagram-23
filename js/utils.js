// const MAX_SYMBOL = 140;
// const line = 'aaaaa';

function getRandomNumber (min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const resultRandomNumber = max > min ? randomNumber : Number(false);
  return resultRandomNumber;
}

// function maxLength (str, maxStrLength) {
//   const resultMaxLength = str.length <= maxStrLength;
//   return resultMaxLength;
// };

export {getRandomNumber};
