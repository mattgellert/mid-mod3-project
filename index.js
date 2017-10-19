const searchForm = document.getElementById('article-search-form')
const input = document.getElementById('article-search-box')
const results = document.getElementById('article-results')
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// searchForm.addEventListener('submit', function(ev) {
//   ev.preventDefault();
//   let term = input.value
//   url += '?' + $.param({
//   'api-key': "d4e745e65ebe4deaad872e2f7eee47bb",
//   'q': term
//   });
//   $.ajax({
//     url: url,
//     method: 'GET',
//   }).done(function(result) {
//     articlesRender(result.response.docs);
//   }).fail(function(err) {
//     throw err;
//   });
//   })
//
// function articlesRender(obj){
//   obj.forEach(function(article) {
//     let div = document.createElement('div')
//     div.innerHTML = `<h2>${article.headline.main}</h2><p>${article.snippet}</p>`
//     results.appendChild(div);
//   })
// }
