import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector(".gallery"),
};
// console.log(refs.gallery.text);

const galleryItemsDivs = galleryItems
    .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`;
    })
    .join("");

refs.gallery.innerHTML = galleryItemsDivs;
    
const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
});
