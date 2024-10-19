const carouselWrapper = document.querySelector(".carousel-wrapper");

const renderCarousel = (wrapper) => {
  const images = wrapper.querySelectorAll(".carousel-image");
  const carouselNav = document.querySelector(".carousel-nav");
  const leftBtn = document.querySelector(".left");
  const rightBtn = document.querySelector(".right");

  const size = images.length;
  let imageWidth = images[0].getBoundingClientRect().width;
  let currentIdx = 0;
  let navBarButtons = [];

  leftBtn.addEventListener("click", handleLeftClick);
  rightBtn.addEventListener("click", handleRightClick);
  window.addEventListener("resize", handleResize);

  function createNavButtons(images) {
    const fragment = document.createDocumentFragment();
    images.forEach(({ src, alt }, idx) => {
      const navButtonElement = document.createElement("button");
      navButtonElement.classList.add("nav-button");
      navButtonElement.addEventListener("click", () => {
        currentIdx = idx;
        updateCarousel();
        updateNavBarButtons();
      });
      fragment.appendChild(navButtonElement);
    });

    carouselNav.appendChild(fragment);
    navBarButtons = document.querySelectorAll(".nav-button");
  }

  createNavButtons(images);

  function updateCarousel() {
    imageWidth = images[0].getBoundingClientRect().width;
    const shiftHorizontal = -currentIdx * imageWidth;
    wrapper.style.transform = `translateX(${shiftHorizontal}px)`;
    updateNavBarButtons();
  }

  function updateNavBarButtons() {
    navBarButtons.forEach((button, idx) => {
      if (idx === currentIdx) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  function handleLeftClick() {
    currentIdx = (currentIdx - 1 + size) % size;
    updateCarousel();
  }
  function handleRightClick() {
    currentIdx = (currentIdx + 1) % size;
    updateCarousel();
  }

  function handleResize() {
    updateCarousel();
  }

  function cleanUp() {
    window.removeEventListener("resize", handleResize);
    leftBtn.removeEventListener("click", handleLeftClick);
    rightBtn.removeEventListener("click", handleRightClick);
  }

  updateCarousel();

  return { cleanUp };
};

const carousel = renderCarousel(carouselWrapper);
