// display variables

const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
const city = document.getElementById("city");
const country = document.getElementById("country");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const status = document.getElementById("status");
const wind = document.getElementById("wind");
const dis = document.querySelector(".dis");
const cels = document.querySelector(".cels");
const startup = document.querySelector(".startup");
const error = document.querySelector(".error");
const loading = document.querySelector(".loading");

// search variable s

const input = document.getElementById("input");
const btn = document.getElementById("btn");

// logical functions

const getData = async () => {
  let inputVal = input.value;
  loading.classList.remove("d-none");
  startup.classList.add("d-none");

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=156a3faec3ca5b2df8265e50d8257549`;

  try {
    const resposnse = await fetch(url);
    const data = await resposnse.json();

    if (data.cod === 200) {
      temp.innerHTML = `${Math.round(data.main.temp)}<sup>o</sup>`;
      city.innerHTML = `${data.name}`;
      country.innerHTML = `${data.sys.country}`;
      humidity.innerHTML = `: ${data.main.humidity}%`;
      pressure.innerHTML = `: ${data.main.pressure}mb`;
      wind.innerHTML = `: ${data.wind.deg} deg`;
      status.innerHTML = `: ${data.weather[0].description}`;
      dis.style.opacity = "1";
      cels.style.opacity = "1";
      error.classList.add("d-none");
      loading.classList.add("d-none");

      if (data.weather[0].main === "Clouds") {
        icon.src = "icons/cloud.svg";
      } else if (data.weather[0].main === "Haze") {
        icon.src = "icons/haze.svg";
      } else if (data.weather[0].main === "Clear") {
        icon.src = "icons/sun.svg";
      } else if (data.weather[0].main === "Rain") {
        icon.src = "icons/rainy.svg";
      }
      console.log(data);
    } else {
      dis.style.opacity = "0";
      cels.style.opacity = "0";
      error.classList.remove("d-none");
      loading.classList.add("d-none");
    }
  } catch (error) {
    console.log("Sorry request not found");
  }
};

btn.addEventListener("click", getData);
input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    getData();
  }
});
