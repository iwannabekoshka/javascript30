const endpointUrl = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const parentDiv = document.querySelector('#cities-list');
const filterInput = document.querySelector('#cities-filter');

const getCities = async () => {
  parentDiv.innerHTML = `<li class="cities-list__item" style="text-align: center;">Loading...</li>`
  const response = await fetch(endpointUrl);
  const cities = await response.json();
  return cities;
}
const drawCities = (cities) => {
  parentDiv.innerHTML = '';

  const html = cities.map((city) =>`<li class="cities-list__item">${city.city}</li>`).join('');

  parentDiv.innerHTML = html;

}
function changeFilterHandler(event, cities) {
  const filterValue = event.target.value;
  if (!filterValue.trim()) drawCities(cities);

  const regex = new RegExp(filterValue, 'gi')
  const filteredCities = cities
    .filter(city => city.city.match(regex))
    .map(city => {
      return {
        ...city,
        city: city.city.replace(regex, function(match) {
          return `<span>${match}</span>`
        })
      }
    });
  drawCities(filteredCities);
}

const cities = await getCities(endpointUrl);
drawCities(cities);

filterInput.addEventListener('keyup', (event) => changeFilterHandler(event, cities));
