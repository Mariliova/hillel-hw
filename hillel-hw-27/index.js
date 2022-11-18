const input = document.getElementById("input");
const button = document.getElementById("buy-button");

button.addEventListener("click", () => {
  const link = input.value;
  const HTTP = "http://";
  const HTTPS = "https://";

  if (link.startWith(HTTP) || link.startWith(HTTPS)) {
    document.location.assign(link);
  } else {
    document.location.assign(`${HTTPS}${link}`);
  }
});
