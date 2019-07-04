const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const error = document.querySelector("p.error");

const forecastDiv = document.querySelector("div.forecast");
const icon = document.querySelector("img.icon");
const country = document.querySelector("h3.country");
const summary = document.querySelector("p.summary");
const temp = document.querySelector("p.temp");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  search.value = "";

  error.style.display = "block";
  error.textContent = "Loading...";

  fetch(`/weather?address=${location}`).then(response => {
  response.json().then(data => {
    if (data.error) {
      forecastDiv.style.display = "none";
      error.textContent = data.error;
    } else {
      error.style.display = "none";
      forecastDiv.style.display = "block";

      icon.setAttribute("src", `/img/icons/${data.forecast.icon}.svg`);
      country.textContent = data.location;
      summary.textContent = data.forecast.summary;
      temp.innerHTML =  `${data.forecast.temperature} &deg;C`;
    }
    });
  });

});