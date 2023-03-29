// console.log("conectado")
// const leftBtn = document.getElementById("left");
// const centerBtn = document.getElementById("center");
// const rightBtn = document.getElementById("right");
// const slider = document.getElementById("slider");

// let trackPosition = 2;

// const changeOrder= (e)=>{
//   let direction = e.target.id;
//   switch (direction) {
//     case "left":
//       if (trackPosition === 3) {
//         slider.style.animationName = "rightToLeft";
//         slider.style.animationDuration = "0.5s";
//         trackPosition = 1;
//         return (slider.style.left = "0vw");
//       }
//       trackPosition = 1;
//       slider.style.animationName = "left";
//       slider.style.animationDuration = "1s";
//       return (slider.style.left = "0px");

//     case "center": {
//       if (trackPosition > 2) {
//         slider.style.animationName = "rightToCenter";
//         slider.style.animationDuration = "1s";
//       } else if (trackPosition < 2) {
//         slider.style.animationName = "leftToCenter";
//         slider.style.animationDuration = "1s";
//       }
//       trackPosition = 2;
//       return (slider.style.left = "-15vw");
//     }
//     case "right":
//       if (trackPosition === 1) {
//         slider.style.animationName = "leftToRight";
//         slider.style.animationDuration = "0.5s";
//         trackPosition = 3;
//         return (slider.style.left = "-30vw");
//       }
//       trackPosition = 3;
//       slider.style.animationName = "right";
//       slider.style.animationDuration = "1s";
//       return (slider.style.left = "-30vw");
//   }
// };

// leftBtn.addEventListener("click", changeOrder);
// centerBtn.addEventListener("click", changeOrder);
// rightBtn.addEventListener("click", changeOrder);

// MEDIC 

const leftBtn = document.getElementById("left");
const centerBtn = document.getElementById("center");
const rightBtn = document.getElementById("right");
const slider = document.getElementById("slider");

let trackPosition = 2;

const changeOrder = (e) => {
  let direction = e.target.id;
  switch (direction) {
    case "left":
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
      if (trackPosition > 2) {
        slider.style.animationName = "rightToCenter";
        slider.style.animationDuration = "1s";
      } else if (trackPosition < 2) {
        slider.style.animationName = "leftToCenter";
        slider.style.animationDuration = "1s";
      }
      trackPosition = 2;
      return (slider.style.left = "-21.5vw");
    }
    case "right":
      if (trackPosition === 1) {
        slider.style.animationName = "leftToRight";
        slider.style.animationDuration = "0.5s";
        trackPosition = 3;
        return (slider.style.left = "-43vw");
      }
      trackPosition = 3;
      slider.style.animationName = "right";
      slider.style.animationDuration = "1s";
      return (slider.style.left = "-43vw");
  }
};

leftBtn.addEventListener("click", changeOrder);
centerBtn.addEventListener("click", changeOrder);
rightBtn.addEventListener("click", changeOrder);
