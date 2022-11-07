const container = document.querySelector(".container");
const input = document.querySelector(".input");
const ghost = document.createElement("div");
ghost.classList.add("ghost");

const handleInput1 = (input.onblur = () => {
  ghost.remove();
});

input.addEventListener("blur", handleInput1);

const handleInput2 = (input.onfocus = () => {
  container.appendChild(ghost);
});

input.addEventListener("focus", handleInput2);
