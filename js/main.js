const CHARACTERS = 140;
let randomInteger;
let n = 1;

const randomSelection = function(min, max) {
  if (max <= min) {
    max++;
  }

  return randomInteger(min, max);
};

randomSelection(3, 7);

const maxLenght = function(lineNumber, lineLenght) {
  return n <= lineNumber && lineLenght <= CHARACTERS ? n++ : 'error';
};

maxLenght(3, 57);
