
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryLi = galleryItems.map(({preview, original, description}) =>
`<li data-preview=${preview} class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}/>
  </a>
</li>`).join('');

gallery.insertAdjacentHTML("beforeend", galleryLi);

gallery.addEventListener("click", onClick)

function onClick (evt) {
    evt.preventDefault();
    const dataPreview = evt.target.dataset.source;
    const img = evt.target.alt;
    const instance = basicLightbox.create(`
    <div>
    <img src="${dataPreview}" alt=""${img}/>
    </div>
    `) 
    instance.show()
}
console.log(galleryItems)

