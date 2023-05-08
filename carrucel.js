const carousel = document.querySelector(".carousel");
const prevBtn = carousel.querySelector(".carousel-prev");
const nextBtn = carousel.querySelector(".carousel-next");
const items = carousel.querySelectorAll(".carousel-item");

let currentItem = 0;

function showItem(index) {
  items.forEach((item) => item.classList.remove("active", "left-item", "right-item", "brightness"));

  if (index < 0) {
    index = items.length - 1;
  } else if (index >= items.length) {
    index = 0;
  }

  if (index < currentItem) {
    items[index].classList.add("left");
    items[currentItem].classList.add("right");
  } else if (index > currentItem) {
    items[index].classList.add("right");
    items[currentItem].classList.add("left");
  }

  items[index].classList.add("active");
  items[currentItem].classList.add(currentItem > index ? "left-item" : "right-item", "brightness");
  currentItem = index;
}

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = items.length - 1;
  }
  showItem(currentItem);
});

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem >= items.length) {
    currentItem = 0;
  }
  showItem(currentItem);
});

showItem(currentItem);

// Añadir enlaces a cada item del carrusel
const links = carousel.querySelectorAll("a");
items.forEach((item, index) => {
  item.querySelector("a").classList.add(`enlace-${index+1}`);
});


