const weatherDisplay = document.querySelector(".weather");
const weatherForm = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city-input");

// Fetch weather data from API
const fecthSymbol = async (Symbol) => {
  const url = `/scrath?word=${Symbol}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === 404) {
    alert("Symbol not found");
    return;
  }

  // if (data.cod === 401) {
  //   alert("Invalid API Key");
  //   return;
  // }

  const displayData = {
    name: data.data.name,
    lastPrice: data.data.lastPrice,
  };

  addWeatherToDOM(displayData);
};

// Add display data to DOM
const addWeatherToDOM = (data) => {
  weatherDisplay.innerHTML = `
    <h1>${data.name}</h1>
    <h2>${data.lastPrice} </h2>
  `;
  cityInput.value = "";
};

// const kelvinToCel = (temp) => {
//   return Math.ceil(temp - 273.15);
// };

// Event listener for form submission
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cityInput.value === "") {
    alert("Please enter a Symbol");
  } else {
    fecthSymbol(cityInput.value);
  }
});

// Initial fetch
fecthSymbol("VND");
