//import library
import SimpleLightbox from 'simplelightbox';
//import own code
import { galleryItems } from './gallery-items';
//import styles
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
// Change code below this line
console.log('galleryItems');

const gallery = document.querySelector('.gallery');
(function () {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
})();

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
