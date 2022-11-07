const arr = ["./img/dog1.jpeg", "./img/dog2.jpeg", "./img/dog3.jpeg", "./img/dog4.jpeg", "./img/dog5.jpeg"];
const img = document.querySelector("img");

const randomKey = arr[Math.floor(Math.random() * arr.length)];
img.setAttribute("src", randomKey);