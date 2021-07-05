import {getCommentsArray} from './mock-photos.js';
import {getPhoto} from './mock-photos.js';
import {getRandomNumber} from './utils.js';

const pictures = document.querySelector('.pictures');
const fragmentPicture = document.querySelector('#picture').textContent;
const picture = document.querySelector('.picture');

function renderingMiniPictures () {
  const pictureBox = document.createDocumentFragment();
  for (let i=0; i<pictures.lenght; i++) {
    fragmentPicture.querySelector('.picture__img').src = getPhoto.url;
    fragmentPicture.querySelector('.picture__comments').textContent = getCommentsArray;
    fragmentPicture.querySelector('.picture__likes').textContent = getRandomNumber;
    pictureBox.push(picture.items(i));
  }
  return pictures.appendChild(pictureBox);
}

renderingMiniPictures();
