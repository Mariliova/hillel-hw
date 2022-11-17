const reactions = ["👍", "👎", "💚", "💩", "🤣"];

const container = document.querySelector(".container");

const reactionElements = reactions.map((reaction) => {
  const wrapper = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = reaction;
  const counter = document.createElement("div");
  counter.classList.add("counter");
  counter.innerText = 0;
  wrapper.append(button, counter);

  button.addEventListener("click", function (event) {
    if (event.target === button) {
      counter.innerText = parseInt(counter.innerText) + 1;
    }
  });

  return wrapper;
});

reactionElements.forEach((elem) => container.appendChild(elem));
