function capitalizeEachWord(string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let weatherCity = document.querySelector("#weather-city");
  weatherCity.innerHTML = searchInput.value;
  if (searchInput.value) {
    let inputCityCapitalize = capitalizeEachWord(searchInput.value);
    weatherCity.innerHTML = inputCityCapitalize;
  }
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
