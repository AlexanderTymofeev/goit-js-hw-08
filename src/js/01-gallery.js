import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const container = document.querySelector('.gallery');
const imageMarkup = createGalary(galleryItems);

container.insertAdjacentHTML('beforeend', imageMarkup);

function createGalary(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
}).join('');
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);

