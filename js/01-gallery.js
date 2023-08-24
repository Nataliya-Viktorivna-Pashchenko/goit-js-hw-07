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

    if (event.target.nodeName !== "IMG") { return };

     event.preventDefault();
    
    const galleryItem = event.target.dataset.sours;

    const instance = basicLightbox.create(
        `<img src = '${galleryItem}'>`,
        {onShow: (instance) => {document.addEventListener("keydown", pressEsc);},
         onClose: (instance) => {document.removeEventListener("keydown", pressEsc);},
        }
    );
    instance.show();

    function pressEsc(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
};
galleryList.addEventListener("click", hendleGallery);
    