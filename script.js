const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const controlBullets = document.querySelectorAll(".controls li");
const indicatorParents = document.querySelector(".controls ul");

// leftArrow.style.opacity = "0.7";
// rightArrow.style.opacity = "1";

// eslint-disable-next-line prefer-const
let sectionIndex = 0;

function setIndex() {
  const selectedBullets = document.querySelector(".controls .selected");
  selectedBullets.classList.remove("selected");
  // eslint-disable-next-line prefer-template
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
}
controlBullets.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        sectionIndex = index;
        // const selectedBullets = document.querySelector(".controls .selected");
        // selectedBullets.classList.remove("selected");
        setIndex();
        indicator.classList.add("selected");
        // eslint-disable-next-line prefer-template
        // slider.style.transform = "translate(" + index * -25 + "%)";

    })
});

leftArrow.addEventListener("click", () => {
  // eslint-disable-next-line prefer-template, operator-assignment
  // sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
if (sectionIndex > 0) {
    sectionIndex -= 1;
  } else {
    sectionIndex = 0;
  }
  // const selectedBullets = document.querySelector(".controls .selected");
  // selectedBullets.classList.remove("selected");
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
  // eslint-disable-next-line prefer-template
  // slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

rightArrow.addEventListener("click", () => {
  // eslint-disable-next-line prefer-template, operator-assignment
  // sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
if (sectionIndex < 3) {
    sectionIndex += 1;
  } else {
    sectionIndex = 3;
  }
  // const selectedBullets = document.querySelector(".controls .selected");
  // selectedBullets.classList.remove("selected");
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");

  // eslint-disable-next-line prefer-template
  // slider.style.transform = "translate(" +  sectionIndex * -25 + "%)";
});
