import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector(".gallery"),
};
// console.log(refs.gallery.text);
const galleryItemsDivs = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
}).join("");

refs.gallery.innerHTML = galleryItemsDivs;

refs.gallery.addEventListener("click", (evt) => {
    evt.preventDefault();
    const onEsapeClose = ({ code }) => {
    console.log(code);
    if (code === "Escape") {
        instance.close();
    }
    };
    if (!evt.target.classList.contains("gallery__image")) {
    return;
    }
    const instance = basicLightbox.create(
    `
        <img
            class="gallery__image"
            src="${evt.target.dataset.source}"
            data-source="${evt.target.dataset.source}"
            alt="${evt.target.alt}"
            />
	`,
    {
        closable: true,
        className: "",

        onShow: (instance) => {
        window.addEventListener("keydown", onEsapeClose);
        },

        onClose: (instance) => {
        window.removeEventListener("keydown", onEsapeClose);
        },
    }
    );
    instance.show();
});