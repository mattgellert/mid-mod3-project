const searchForm = document.getElementById('image-search-form')
const dayInput = document.getElementById('image-search-box-day')
const monthInput = document.getElementById('image-search-box-month')
const yearInput = document.getElementById('image-search-box-year')
const results = document.querySelector('.image-results')
const allYears = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
const allMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
const allDaysNormal = [
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
]
const allDaysLeap = [
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
]

let imagesURL = 'https://api.nasa.gov/planetary/apod?api_key=yAB0zruWx3MNSaoBNh9NIke4ycAwSGWtxTHQHOdX&date='
let firstImageDate = new Date('1995-06-20')
let today = new Date
let curr_day = today.toISOString().slice(8,10)
let curr_month = today.toISOString().slice(5,7)
let curr_year = today.toISOString().slice(0,4)
dayInput.value = curr_day
monthInput.value = curr_month
yearInput.value = curr_year

Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    let dateArray = new Array();
    let currentDate = startDate;
    while (currentDate <= stopDate) {
        let newDate = new Date(currentDate)
        let newDateFormatted = newDate.toISOString().slice(0,10)
        dateArray.push(newDateFormatted);
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

function fetchImages(url){
  // fetch(imagesURL + yearInput.value + '-' + monthInput.value + '-' + dayInput.value)
  fetch(url)
    .then(res => res.json())
    .then(json => {imageRender(json)}); // COME BACK TO THIS MOFO
}

let urls = []
let imageCount = 0
function fetchTenImages(urls){
  for (let i = 0; i < 10; i++) {
    fetchImages(urls[imageCount])
    imageCount++
  }
}


searchForm.addEventListener('submit', function(ev) {
  ev.preventDefault();
  results.innerHTML = ''
  let inputDay = dayInput.value
  let inputMonth = monthInput.value
  let inputYear = yearInput.value

  if (!inputYear && inputMonth && inputDay) { //MONTH + DAY
    allYears.forEach(year => {
      urls.push(`${imagesURL + year}-${inputMonth}-${inputDay}`)
      // fetchImages(`${imagesURL + year}-${inputMonth}-${inputDay}`)
    })
    fetchTenImages(urls)
  } else if (!inputYear && !inputMonth && inputDay) { //DAY
    allYears.forEach(year => {
      allMonths.forEach(month => {
        urls.push(`${imagesURL + year}-${month}-${inputDay}`)
        // fetchImages(`${imagesURL + year}-${month}-${inputDay}`)
      })
    })
    fetchTenImages(urls)
  } else if (!inputYear && inputMonth && !inputDay) { //MONTH
    allYears.forEach(year => {
      if (year % 4 === 0){
        allDaysLeap[parseInt(inputMonth) - 1].forEach(day => {
          urls.push(`${imagesURL + year}-${inputMonth}-${day}`)
          // fetchImages(`${imagesURL + year}-${inputMonth}-${day}`)
        })
      } else {
        allDaysNormal[parseInt(inputMonth) - 1].forEach(day => {
          urls.push(`${imagesURL + year}-${inputMonth}-${day}`)
          // fetchImages(`${imagesURL + year}-${inputMonth}-${day}`)
        })
      }
    })
    fetchTenImages(urls)
  } else if (inputYear && !inputMonth && !inputDay) { //YEAR
      let start = new Date(`${inputYear}-01-01`)
      let end = new Date(`${inputYear}-12-31`)
      let dates = getDates(start, end)
      dates.forEach(date => {
        urls.push(imagesURL + date)
        // fetchImages(imagesURL + date)
      })
      fetchTenImages(urls)
  } else if (inputYear && !inputMonth && inputDay){ // DAY + YEAR // NOT DONE BITCHES
    if (inputYear % 4 === 0){
      allDaysLeap.forEach((month, i) => {
        urls.push(`${imagesURL + inputYear}-${i + 1}-${inputDay}`)
      })
    } else {
      allDaysNormal.forEach(month => {
        urls.push(`${imagesURL + inputYear}-${i + 1}-${inputDay}`)
      })
    }
  } else { //MONTH + DAY + YEAR
    let url = imagesURL + yearInput.value + '-' + monthInput.value + '-' + dayInput.value
    fetchImages(url)
  }
});

//started at June 20, 1995 (ends today)
function imageRender(json){
  let div = document.createElement('div')
  div.innerHTML =
    `<h2>${json.title} - ${json.date}</h2>
    <figure>
      <img src=${json.url} height="500px">
      <figcaption>Courtesy of: ${json.copyright}</figcaption>
    </figure>
    <p>${json.explanation}</p>`
  results.appendChild(div);
}
