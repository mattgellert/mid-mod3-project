const searchForm = document.getElementById('article-search-form')
const input = document.getElementById('article-search-box')
const results = document.getElementById('article-results')
let imagesURL = 'https://images-api.nasa.gov/search?q='

searchForm.addEventListener('submit', function(ev) {
  ev.preventDefault();
  fetch(imagesURL + `${input.value}`)
    .then(res => res.json())
    .then(json => imageRender(json));
});
