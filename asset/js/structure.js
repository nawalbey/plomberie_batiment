const carouselWrapper = document.querySelector(".carousel-wrapper");
const pagination = document.querySelector(".pagination");
const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0;

function updateCarousel() {
  carouselWrapper.style.transform = `translateX(${-currentIndex * 25}%)`;
}

function createPaginationDots() {
  for (let i = 0; i < items.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("pagination-dot");
    dot.addEventListener("click", () => goToSlide(i));
    pagination.appendChild(dot);
  }
}

function updatePaginationDots() {
  const dots = document.querySelectorAll(".pagination-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
  updatePaginationDots();
}

createPaginationDots();
updatePaginationDots();

// Auto-advance example (uncomment to enable)

setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
  updatePaginationDots();
}, 3000);
