import {getPhotosArray} from './mock-photos.js';

const photosData = getPhotosArray();
const pictures = document.querySelector('.pictures');
// const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const templatePicture = document.querySelector('#picture').content;
const picture = templatePicture.querySelector('.picture');

function getPictureTemplate (object) {
  console.log(object);
  const newPhotoElement = picture.cloneNode(true);
  newPhotoElement.querySelector('.picture__img').src = object.url;
  newPhotoElement.querySelector('.picture__likes').textContent = object.likes;
  newPhotoElement.querySelector('.picture__comments').textContent = object.comments.length;
  return newPhotoElement;
}

function renderingPictures (photosArray) {
  console.log(photosArray);
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < photosArray.length; i++) {
    const newPictureTemplate = getPictureTemplate(photosArray[i]);
    fragment.appendChild(newPictureTemplate);
  }
  pictures.appendChild(fragment);
}

renderingPictures(photosData);

//console.log(photosData);
