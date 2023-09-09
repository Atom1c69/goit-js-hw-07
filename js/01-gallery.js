import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const modal = basicLightbox.create("");

const galleryMarkup = galleryItems
  .map(
    (item) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>
`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const source = event.target.dataset.source;
    const image = `<img src = "${source}"/>`;
    modal.element().innerHTML = image;
    modal.show();
    modal.element().addEventListener("click", closeModal);
    document.addEventListener("keydown", closeModalWithKeybord);
  }
}

function closeModal() {
  modal.close();
  modal.element().removeEventListener("click", closeModal);
  document.removeEventListener("keydown", closeModalWithKeybord);
}

function closeModalWithKeybord(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}
