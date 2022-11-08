const imgSrcs = [
  "./img/dog1.jpeg",
  "./img/dog2.jpeg",
  "./img/dog3.jpeg",
  "./img/dog4.jpeg",
  "./img/dog5.jpeg",
  "./img/dog6.jpeg",
];

const img = document.querySelector("img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.hidden = true;

const nextImg = (next.onclick = () => {
  const currentImgAttr = img.getAttribute("src");
  const currentImgScrIndex = imgSrcs.indexOf(currentImgAttr);
  img.setAttribute("src", `${imgSrcs[currentImgScrIndex + 1]}`);

  if (imgSrcs.length - currentImgScrIndex >= 2) {
    prev.hidden = false;
  }

  if (imgSrcs.length - 2 == currentImgScrIndex) {
    next.hidden = true;
  }
});

const prevImg = (prev.onclick = () => {
  const currentImgAttr = img.getAttribute("src");
  const currentImgScrIndex = imgSrcs.indexOf(currentImgAttr);
  img.setAttribute("src", `${imgSrcs[currentImgScrIndex - 1]}`);

  if (currentImgScrIndex == 1) {
    prev.hidden = true;
  }

  if (imgSrcs.length - 1 == currentImgScrIndex) {
    next.hidden = false;
  }
});