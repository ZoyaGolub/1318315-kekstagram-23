// const MAX_SYMBOL = 140;
// const line = 'aaaaa';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
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

const DESCRIPTION = [
  'фото 1',
  'фото 2',
  'фото 3',
  'фото 4',
  'фото 5',
  'фото 6',
  'фото 7',
  'фото 8',
  'фото 9',
  'фото 10',
  'фото 11',
  'фото 12',
  'фото 13',
  'фото 14',
  'фото 15',
  'фото 16',
  'фото 17',
  'фото 18',
  'фото 19',
  'фото 20',
  'фото 21',
  'фото 22',
  'фото 23',
  'фото 24',
  'фото 25',
];

function getRandomNumber (min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const resultRandomNumber = max > min ? randomNumber : Number(false);
  return resultRandomNumber;
}

// function maxLenght (str, maxStrLenght) {
//   const resultMaxLenght = str.lenght <= maxStrLenght;
//   return resultMaxLenght;
// };

function getComment (index) {
  const comment = {
    id: index,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: MESSAGES[getRandomNumber(0, MESSAGES.length)],
    name: NAMES[getRandomNumber(0, NAMES.length)],
  };
  return comment;
}

// console.log(getComment());

function getCommentsArray () {
  const comments = [];
  for (let i=0; i<getRandomNumber(0, 10); i++) {
    comments.push(getComment(i));
  }
  return comments;
}

function getPhoto (index) {
  const photo = {
    id: Number(index),
    url: `photos/${index}.jpg`,
    description: DESCRIPTION.toString[index],
    likes: getRandomNumber(15, 200),
    comments: getCommentsArray(),
  };
  return photo;
}

// console.log(getPhoto());

function getPhotosArray () {
  const photos = [];
  for (let i=0; i<25; i++) {
    photos.push(getPhoto(i));
  }
  return photos;
}

// console.log(getPhotosArray());

getPhotosArray();
