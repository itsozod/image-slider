const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const controlBullets = document.querySelectorAll(".controls li");

// eslint-disable-next-line prefer-const
let sectionIndex = 0;

controlBullets.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        sectionIndex = index;
        const selectedBullets = document.querySelector(".controls .selected");
        selectedBullets.classList.remove("selected");
        indicator.classList.add("selected");
        // eslint-disable-next-line prefer-template
        slider.style.transform = "translate(" + index * -25 + "%)";

    })
});

leftArrow.addEventListener("click", () => {
  // eslint-disable-next-line prefer-template, operator-assignment
//   sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
if (sectionIndex > 0) {
    sectionIndex -= 1;
  } else {
    sectionIndex = 0;
  }
  
  // eslint-disable-next-line prefer-template
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

rightArrow.addEventListener("click", () => {
  // eslint-disable-next-line prefer-template, operator-assignment
//   sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
if (sectionIndex < 3) {
    sectionIndex += 1;
  } else {
    sectionIndex = 3;
  }
  // eslint-disable-next-line prefer-template
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
