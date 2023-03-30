// Trazendo os elementos do HTML
const leftBtn = document.getElementById("left");
const centerBtn = document.getElementById("center");
const rightBtn = document.getElementById("right");
const slider = document.getElementById("slider");

// Resetando a classe ativa dos botões
const resetClassActive = () => {
  leftBtn.classList.remove("active")
  rightBtn.classList.remove("active")
  centerBtn.classList.remove("active")
}

// Animação dinamica do Slider
const configAnimation = (nomeAnim, duracao) => {
  slider.style.animationName = nomeAnim
  slider.style.animationDuration = duracao
}

// Rastreamento da posição atual do slider
let trackPosition = 2;

// Responsavel por alterar a posição
const changeOrder = (e) => {
  let direction = e.target.id;
  switch (direction) {
    case "left":
      resetClassActive()
      leftBtn.classList.add("active")
      if (trackPosition === 3) {
        configAnimation("rightToLeft", "0.5s")
        trackPosition = 1;
        return (slider.style.left = "0");
      }
      trackPosition = 1;
      configAnimation("left", "1s")
      return (slider.style.left = "0");

    case "center": {
      resetClassActive()
      centerBtn.classList.add("active")
      if (trackPosition > 2) {
        configAnimation("rightToCenter", "1s")
      } else if (trackPosition < 2) {
        configAnimation("leftToCenter", "1s")
      }
      trackPosition = 2;
      return (slider.style.left = "-22.5%");
    }
    case "right":
      resetClassActive()
      rightBtn.classList.add("active")
      if (trackPosition === 1) {
        configAnimation("leftToRight", "0.5s")
        trackPosition = 3;
        return (slider.style.left = "-45%");
      }
      trackPosition = 3;
      configAnimation("right", "1s")
      return (slider.style.left = "-45%");
  }
};

// EventListener de cada botão
leftBtn.addEventListener("click", changeOrder);
centerBtn.addEventListener("click", changeOrder);
rightBtn.addEventListener("click", changeOrder);
