const leftBtn = document.getElementById("left");
const centerBtn = document.getElementById("center");
const rightBtn = document.getElementById("right");
const slider = document.getElementById("slider");

let trackPosition = 2;

const changeOrder = (e) => {
  let direction = e.target.id;
  switch (direction) {
    case "left":
      leftBtn.classList.add("active")
      rightBtn.classList.remove("active")
      centerBtn.classList.remove("active")
      if (trackPosition === 3) {
        slider.style.animationName = "rightToLeft";
        slider.style.animationDuration = "0.5s";
        trackPosition = 1;
        return (slider.style.left = "0vw");
      }
      trackPosition = 1;
      slider.style.animationName = "left";
      slider.style.animationDuration = "1s";
      return (slider.style.left = "0px");

    case "center": {
      centerBtn.classList.add("active")
      leftBtn.classList.remove("active")
      rightBtn.classList.remove("active")
      if (trackPosition > 2) {
        slider.style.animationName = "rightToCenter";
        slider.style.animationDuration = "1s";
      } else if (trackPosition < 2) {
        slider.style.animationName = "leftToCenter";
        slider.style.animationDuration = "1s";
      }
      trackPosition = 2;
      return (slider.style.left = "-18vw");
    }
    case "right":
      rightBtn.classList.add("active")
      centerBtn.classList.remove("active")
      leftBtn.classList.remove("active")
      if (trackPosition === 1) {
        slider.style.animationName = "leftToRight";
        slider.style.animationDuration = "0.5s";
        trackPosition = 3;
        return (slider.style.left = "-36vw");
      }
      trackPosition = 3;
      slider.style.animationName = "right";
      slider.style.animationDuration = "1s";
      return (slider.style.left = "-36vw");
  }
};

leftBtn.addEventListener("click", changeOrder);
centerBtn.addEventListener("click", changeOrder);
rightBtn.addEventListener("click", changeOrder);
