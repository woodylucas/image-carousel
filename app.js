const renderCarousel = (wrapper) => {
  const images = wrapper.querySelectorAll(".carousel-image");
  const leftBtn = document.querySelector(".left");
  const rightBtn = document.querySelector(".right");

  const size = images.length;
  let imageWidth = images[0].getBoundingClientRect().width;
  let currentIdx = 0;

  leftBtn.addEventListener("click", handleLeftClick);
  rightBtn.addEventListener("click", handleRightClick);
  window.addEventListener("resize", handleResize);

  function updateCarousel() {
    // Recalculate the image width dynamically
    imageWidth = images[0].getBoundingClientRect().width;
    const translateX = -currentIdx * imageWidth;
    wrapper.style.transform = `translateX(${translateX}px)`;
  }
  function handleLeftClick() {
    currentIdx = (currentIdx - 1 + size) % size;
    console.log(currentIdx);
    updateCarousel();
  }
  function handleRightClick() {
    currentIdx = (currentIdx + 1) % size;
    console.log(currentIdx);
    updateCarousel();
  }

  function handleResize() {
    updateCarousel();
  }

  function cleanup() {
    window.removeEventListener("resize", handleResize);
    leftBtn.removeEventListener("click", handleLeftClick);
    rightBtn.removeEventListener("click", handleRightClick);
  }

  return { cleanup };
};

const carousel = renderCarousel(document.querySelector(".carousel-wrapper"));
