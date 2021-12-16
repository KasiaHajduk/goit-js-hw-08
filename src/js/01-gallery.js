import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


//tworzenie znacznika
const gallery = document.querySelector(".gallery");

const elements = [];

galleryItems.forEach((galleryItem) => {
  console.log(galleryItem.preview);
  console.log(galleryItem.original);
  console.log(galleryItem.description);
  
  const item = document.createElement("div");
  item.classList.add("gallery__item");
  gallery.appendChild(item);

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = galleryItem.original;
  item.appendChild(link);

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = galleryItem.preview;
  image.dataset.source = galleryItem.original;
  image.alt = galleryItem.description;

  link.append(image);

  elements.push(item);
});

console.log(elements);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
}
);

