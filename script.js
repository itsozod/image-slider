/* eslint-disable no-plusplus */
const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const controlBullets = document.querySelectorAll(".controls li");
const indicatorParents = document.querySelector(".controls ul");

leftArrow.style.pointerEvents = "none";
leftArrow.style.opacity = "0.6";

let sectionIndex = 0;

let touchStartX = 0;
let touchEndX = 0;

// function setIndex() {
//   const selectedBullets = document.querySelector(".controls .selected");
//   selectedBullets.classList.remove("selected");
//   // eslint-disable-next-line prefer-template
//   slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
// }

function setIndex() {
  const selectedBullets = document.querySelector(".controls .selected");
  selectedBullets.classList.remove("selected");
  slider.style.transform = `translateX(-${sectionIndex * 25}%)`;
  controlBullets[sectionIndex].classList.add("selected");
}

// Handle swipe gesture
function handleSwipe() {
  if (touchEndX < touchStartX) {
    // Swiped left
    sectionIndex = Math.min(sectionIndex + 1, controlBullets.length - 1);
  } else if (touchEndX > touchStartX) {
    // Swiped right
    sectionIndex = Math.max(sectionIndex - 1, 0);
  }
  if (sectionIndex === 0) {
    leftArrow.style.pointerEvents = "none";
    leftArrow.style.opacity = "0.6";
    rightArrow.style.pointerEvents = "auto";
    rightArrow.style.opacity = "1";
  } else if (sectionIndex === controlBullets.length - 1) {
    leftArrow.style.pointerEvents = "auto";
    leftArrow.style.opacity = "1";
    rightArrow.style.pointerEvents = "none";
    rightArrow.style.opacity = "0.6";
  } else {
    leftArrow.style.pointerEvents = "auto";
    leftArrow.style.opacity = "1";
    rightArrow.style.pointerEvents = "auto";
    rightArrow.style.opacity = "1";
  }
  // Update the slider
  setIndex();
}
// Listen for touch start event
slider.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

// Listen for touch end event
slider.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipe();
});

// Prevent scrolling when touching the slider
slider.addEventListener("touchmove", (event) => {
  event.preventDefault();
});

// event lsutener for bullets at the bottom
controlBullets.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    if (sectionIndex !== index) {
      sectionIndex = index;
      setIndex();
      indicator.classList.add("selected");

      // Enable or disable arrows based on sectionIndex
      if (sectionIndex === 0) {
        leftArrow.style.pointerEvents = "none";
        leftArrow.style.opacity = "0.6";
        rightArrow.style.pointerEvents = "auto";
        rightArrow.style.opacity = "1";
      } else if (sectionIndex === controlBullets.length - 1) {
        leftArrow.style.pointerEvents = "auto";
        leftArrow.style.opacity = "1";
        rightArrow.style.pointerEvents = "none";
        rightArrow.style.opacity = "0.6";
      } else {
        leftArrow.style.pointerEvents = "auto";
        leftArrow.style.opacity = "1";
        rightArrow.style.pointerEvents = "auto";
        rightArrow.style.opacity = "1";
      }
    }
  });
});

// event listener for left arow
leftArrow.addEventListener("click", () => {
  if (sectionIndex > 0) {
    // eslint-disable-next-line no-plusplus
    sectionIndex--;
    rightArrow.style.pointerEvents = "auto";
    rightArrow.style.opacity = "1";
    if (sectionIndex === 0) {
      leftArrow.style.pointerEvents = "none";
      leftArrow.style.opacity = "0.6";
    }
  }
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
});

// event listener for right arrow
rightArrow.addEventListener("click", () => {
  if (sectionIndex < controlBullets.length - 1) {
    // eslint-disable-next-line no-plusplus
    sectionIndex++;
    leftArrow.style.pointerEvents = "auto";
    leftArrow.style.opacity = "1";
    if (sectionIndex === controlBullets.length - 1) {
      rightArrow.style.pointerEvents = "none";
      rightArrow.style.opacity = "0.6";
    }
  }
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
});

