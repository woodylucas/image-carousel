# JavaScript Carousel

This project implements a simple, responsive image carousel using vanilla JavaScript. It allows users to navigate through a series of images with left and right buttons, and it adjusts dynamically when the browser window is resized.

## Features

- **Responsive**: The carousel automatically adjusts when the browser is resized.
- **Navigation**: Users can navigate left and right through the images.
- **Wrap-around**: The carousel wraps around when navigating beyond the first or last image.
- **Cleanup**: Event listeners can be removed when no longer needed.

## Code Overview

### Initialization

The `renderCarousel` function is the core of the carousel. It initializes the carousel, sets up event listeners, and handles navigation between images.

```js
const carousel = renderCarousel(document.querySelector(".carousel-wrapper"));
```

### Parameters

- `wrapper`: The container element (`.carousel-wrapper`) that holds all the carousel images.

### Functionality

1. **Dynamic Image Width**: The carousel recalculates the image width each time an image is displayed or the window is resized.
2. **Left/Right Navigation**: Button clicks navigate between images and wrap around when reaching the end.
3. **Resize Handling**: Automatically adjusts the carousel layout when the window is resized.
4. **Cleanup**: Returns a cleanup function to remove event listeners when the carousel is no longer needed.

### Example HTML Structure

```html
<div class="carousel-wrapper">
  <img
    src="https://picsum.photos/id/600/600/400"
    class="carousel-image"
    alt="Forest"
  />
  <img
    src="https://picsum.photos/id/100/600/400"
    class="carousel-image"
    alt="Yak"
  />
  <img
    src="https://picsum.photos/id/200/600/400"
    class="carousel-image"
    alt="Hay"
  />
  <img
    src="https://picsum.photos/id/400/600/400"
    class="carousel-image"
    alt="Plants"
  />
  <img
    src="https://picsum.photos/id/500/600/400"
    class="carousel-image"
    alt="Building"
  />
</div>
<button class="left">Left</button>
<button class="right">Right</button>
```


Make sure the carousel images have the class `.carousel-image` and the container holding them is wrapped in a `.carousel-wrapper`. The navigation buttons should have the classes `.left` and `.right`.

### Functions

- `updateCarousel()`: Calculates and applies the correct `translateX` value based on the current image index and width.
- `handleLeftClick()`: Moves to the previous image and wraps around if necessary.
- `handleRightClick()`: Moves to the next image and wraps around if necessary.
- `handleResize()`: Recalculates the carousel layout when the window is resized.

### Cleanup

If you need to remove the event listeners (e.g., if the carousel is removed from the page), you can call:

```js
carousel.cleanup();
```

This will remove the event listeners attached to the window resize event and the left/right buttons.

## Installation

Simply include the carousel logic in your JavaScript file and ensure your HTML structure matches the expected format.
