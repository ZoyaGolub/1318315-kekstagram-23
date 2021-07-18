import {getCommentsArray} from './mock-photos.js';
//import {getPhoto} from './mock-photos.js';
import {getPhotosArray} from './mock-photos.js';

const pictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture');
// const picture = templatePicture.querySelector('.picture');
const fragment = document.createDocumentFragment();

function renderingPictures () {
  const photosData = getPhotosArray();
  const newPhoto = templatePicture.cloneNode(true);
  for (let i = 0; i < photosData.length; i++) {
    newPhoto.querySelector('.picture__img').setAttribute('src', getPhotosArray(i).url);
    newPhoto.querySelector('.picture__likes').textContent = getPhotosArray(i).likes;
    newPhoto.querySelector('.picture__comments').textContent = getCommentsArray(i);
  }
  return fragment.push(newPhoto);
}

renderingPictures();

pictures.appendChild(fragment);
