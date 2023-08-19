import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

const renderGallery = (array) => array.map((item) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-sours="${item.original}"
        alt="${item.description}"/>
        </a>
    </li>`
)
    .join("");

    galleryList.insertAdjacentHTML('beforeend', renderGallery(galleryItems));



const hendleGallery = (event) => {
    if (event.currentTarget === event.target) {
        return;
    }
    event.preventDefault();

    const galleryItem = event.target.dataset.sours;
   
    const modalGalltry = basicLightbox.create(`
		<img src=${galleryItem}>
	`);
       modalGalltry.show();

    const pressEsc = (event) => {
    if (event.code === "Escape") {
        modalGalltry.close();
    }
};
 
document.addEventListener("keyup", pressEsc);
};

galleryList.addEventListener("click", hendleGallery);