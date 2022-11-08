{/* <div class="container">
            <button id="prev">Prev</button>
            <img src="./img/dog1.jpeg" alt="dog1">
            <button id="next">Next</button>
</div> */}

const arr = [
  "./img/dog1.jpeg",
  "./img/dog2.jpeg",
  "./img/dog3.jpeg",
  "./img/dog4.jpeg",
  "./img/dog5.jpeg",
];
const img = document.querySelector("img");

const randomKey = arr[Math.floor(Math.random() * arr.length)];
img.setAttribute("src", randomKey);