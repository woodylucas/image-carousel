const wrapper = document.querySelector(".carousel-wrapper");

const createCarousel = (wrapper) => {
  const images = wrapper.querySelectorAll(".carousel-image");
  const carouselNav = document.querySelector(".carousel-nav");
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");

  let imagesWidth = images[0].getBoundingClientRect().width;
  const size = images.length;
  let currentIdx = 0;
  let navBarButtons = [];

  leftButton.addEventListener("click", handleLeftButton);
  rightButton.addEventListener("click", handleRightButton);
  window.addEventListener("resize", () => updateCarousel());

  function updateCarousel() {
    imagesWidth = images[0].getBoundingClientRect().width;
    const shiftHorizonally = -currentIdx * imagesWidth;
    wrapper.style.transform = `translateX(${shiftHorizonally}px)`;
  }

  function createNavBarButtons(images) {
    carouselNav.replaceChildren();
    const fragment = document.createDocumentFragment();
    images.forEach((image, idx) => {
      const navBarButton = document.createElement("button");
      navBarButton.classList.add("nav-button");
      navBarButton.addEventListener("click", () => {
        currentIdx = idx;
        updateCarousel();
        updateNavBarButtons();
      });
      fragment.appendChild(navBarButton);
    });

    carouselNav.appendChild(fragment);
    navBarButtons = carouselNav.querySelectorAll(".nav-button");
  }

  createNavBarButtons(images);

  function updateNavBarButtons() {
    navBarButtons.forEach((button, idx) => {
      if (currentIdx === idx) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  function handleLeftButton() {
    currentIdx = (currentIdx - 1 + size) % size;
    updateCarousel();
    updateNavBarButtons();
  }
  function handleRightButton() {
    currentIdx = (currentIdx + 1) % size;
    updateCarousel();
    updateNavBarButtons();
  }

  updateNavBarButtons();
  updateCarousel();
};

const carousel = createCarousel(wrapper);
