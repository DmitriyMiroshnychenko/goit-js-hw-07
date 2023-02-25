import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryRef = document.querySelector(".gallery");

function createGallery(items) {
  items.map((item) => {
    const markup = `<div class="gallery__item">
                      <a class="gallery__link" href="${item.original}">
                        <img
                          class="gallery__image"
                          src="${item.preview}"
                          data-source="${item.original}"
                          alt="${item.description}"
                        />
                      </a>
                    </div>`;

    galleryRef.insertAdjacentHTML("beforeend", markup);
  });

  // for (const item of items) {
  //   const markup = `<div class="gallery__item">
  //   <a class="gallery__link" href="${item.original}">
  //     <img
  //       class="gallery__image"
  //       src="${item.preview}"
  //       data-source="${item.original}"
  //       alt="${item.description}"
  //     />
  //   </a>
  // </div>`;

  //   galleryRef.insertAdjacentHTML("beforeend", markup);
  // }
}

createGallery(galleryItems);

galleryRef.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImage = event.target.dataset.source;

  const modal = basicLightbox.create(
    `
		<img width="1280" height="854" src="${largeImage}">
	`
  );

  modal.show();

  document.addEventListener("keydown", handleEscPress);

  function handleEscPress(event) {
    if (event.key === "Escape") {
      modal.close();
      document.removeEventListener("keydown", handleEscPress);
    }
  }
}
console.log(galleryItems);
