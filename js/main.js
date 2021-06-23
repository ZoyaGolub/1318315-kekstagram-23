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
  const resultMaxLenght = str.lenght <= maxStrLenght;
  // console.log(resultMaxLenght);
  return resultMaxLenght;
};

maxLenght(line, MAX_SYMBOL);

const MASSADE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Георгий',
  'Мария',
  'Виктория',
  'Леонид',
  'Анастасия',
  'Максим',
  'Александр',
  'Константин',
  'Матвей',
  'Георгий',
  'Иван',
  'Роман',
  'Артём',
  'Фёдор',
  'Екатерина',
  'Ксения',
  'Алексей',
  'Полина',
  'Анна',
  'Диана',
  'Варвара',
  'София',
  'Кира',
  'Вера',
  'Вероника',
];

const getRandomNumberAvatar = getRandomNumber(1, 6);

const comment = {
  id: getRandomNumber(1, 500),
  avatar: 'img/avatar-getRandomNumberAvatar.svg',
  massage: getRandomNumber(MASSADE),
  name: getRandomNumber(NAME),
};

const newComment = comment;

const photo = {
  id: getRandomNumber(1, 25),
  url: 'photos/id.jpg',
  description: '',
  likes: getRandomNumber(15, 200),
  comments: Array(comment, newComment),
};

const newPhoto = photo;

const photos = Array(photo, newPhoto);
