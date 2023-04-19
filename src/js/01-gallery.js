//import library
import SimpleLightbox from 'simplelightbox';

// Add imports above this line
//import own code
import { galleryItems } from './gallery-items';
//import styles
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

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

console.log('galleryItems');

gallery.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
  const imgGalleryItem = evt.target.classList.contains('gallery-image');
  if (!imgGalleryItem) {
    return;
  }
  new SimpleLightbox('.gallery__image .gallery__link', {
    /* options */
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
  });
}
