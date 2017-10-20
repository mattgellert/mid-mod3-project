const searchForm = document.getElementById('image-search-form')
const dayInput = document.getElementById('image-search-box-day')
const monthInput = document.getElementById('image-search-box-month')
const yearInput = document.getElementById('image-search-box-year')
const centerImageDiv = document.querySelector('.image-center')
const nextImageDiv = document.querySelector('.image-next')
const prevImageDiv = document.querySelector('.image-prev')
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
let today = new Date((new Date()).toLocaleDateString())
let curr_day = today.toISOString().slice(8,10)
let curr_month = today.toISOString().slice(5,7)
let curr_year = today.toISOString().slice(0,4)
let searchWasJustSubmitted = false

dayInput.value = curr_day
monthInput.value = curr_month
yearInput.value = curr_year

let urls = []

searchForm.addEventListener('submit', function(ev) {
  ev.preventDefault();

  // results.innerHTML = ''

  imageCount = 0
  imageIndex = 0
  urls = []

  let inputDay;
  let inputMonth;
  dayInput.value.length === 1 ? inputDay = '0' + dayInput.value : inputDay = dayInput.value
  monthInput.value.length === 1 ? inputMonth = '0' + monthInput.value : inputMonth = monthInput.value
  let inputYear = yearInput.value

  if (!inputYear && inputMonth && inputDay) { //MONTH + DAY
    allYears.forEach(year => {
      if (year % 4 !== 0 && inputMonth === '02' && inputDay === '29') {
        // do nothing
      } else {
        urls.push(`${imagesURL + year}-${inputMonth}-${inputDay}`)
      }
    })
  } else if (!inputYear && !inputMonth && inputDay) { //DAY
    allYears.forEach(year => {
      allMonths.forEach(month => {
        urls.push(`${imagesURL + year}-${month}-${inputDay}`)
      })
    })
  } else if (!inputYear && inputMonth && !inputDay) { //MONTH
    allYears.forEach(year => {
      if (year % 4 === 0){
        allDaysLeap[parseInt(inputMonth) - 1].forEach(day => {
          urls.push(`${imagesURL + year}-${inputMonth}-${day}`)
        })
      } else {
        allDaysNormal[parseInt(inputMonth) - 1].forEach(day => {
          urls.push(`${imagesURL + year}-${inputMonth}-${day}`)
        })
      }
    })
  } else if (inputYear && !inputMonth && !inputDay) { //YEAR
      let start = new Date(`${inputYear}-01-01`)
      let end = new Date(`${inputYear}-12-31`)
      let dates = getDates(start, end)
      dates.forEach(date => {
        urls.push(imagesURL + date)
      })

  } else if (inputYear && !inputMonth && inputDay){ // DAY + YEAR
    let thisMonth;
    if (inputYear % 4 === 0){
      allDaysLeap.forEach(function(month, i) {
        i < 9 ? thisMonth = '0' + (i + 1) : thisMonth = (i + 1)
        urls.push(`${imagesURL + inputYear}-${thisMonth}-${inputDay}`)
      })

    } else {
      allDaysNormal.forEach(function(month, i) {
        i < 9 ? thisMonth = '0' + (i + 1) : thisMonth = (i + 1)
        urls.push(`${imagesURL + inputYear}-${thisMonth}-${inputDay}`)
      })

    }
  } else { //MONTH + DAY + YEAR
    let url = checkUrls([`${imagesURL + yearInput.value}-${monthInput.value }-${dayInput.value}`])[0]
    renderCenterImage(url)
  }
  urls = checkUrls(urls)
  prepTenImages(urls)
  searchWasJustSubmitted = true
});

// nextButton.addEventListener('click', () => {
//   searchWasJustSubmitted = false
//   renderPrevImage(currentImages[imageIndex])
//   renderCenterImage(currentImages[imageIndex + 1])
//   renderNextImage(currentImages[imageIndex + 2])
//   imageIndex++
//
// })

// prevButton.addEventListener('click', () => {
//   renderNextImage(currentImages[imageIndex])
//   renderCenterImage(currentImages[imageIndex - 1])
//   renderPrevImage(currentImages[imageIndex - 2])
//   imageIndex--
// })

function renderPrevImage(json) {
  const div = document.createElement('div')
  div.innerHTML =`<img src=${json.url} width="80%">`
    // `<h2>${json.title} ${json.date}</h2>
    // <figure>
      // <img src=${json.url} width="80%">
    //   <figcaption>Courtesy of: ${json.copyright}</figcaption>
    // </figure>
    // <p>${json.explanation}</p>`
  prevImageDiv.appendChild(div);
}

function renderCenterImage(json) {
    const div = document.createElement('div')
    div.innerHTML = `<img src=${json.url} width="80%">`
      // `<h2>${json.title} ${json.date}</h2>
      // <figure>
      //   <img src=${json.url} width="80%">
      //   <figcaption>Courtesy of: ${json.copyright}</figcaption>
      // </figure>
      // <p>${json.explanation}</p>`
    centerImageDiv.appendChild(div);
}

function renderNextImage(json) {
  const div = document.createElement('div')
  div.innerHTML = `<img src=${json.url} width="80%">`
    // `<h2>${json.title} ${json.date}</h2>
    // <figure>
    //   <img src=${json.url} width="80%">
    //   <figcaption>Courtesy of: ${json.copyright}</figcaption>
    // </figure>
    // <p>${json.explanation}</p>`
  nextImageDiv.appendChild(div);
}

let imageCount = 0
let imageIndex = 0
let currentImages = []
let nextTenImagesData = []


function prepTenImages(urls){
  urls.slice(imageCount, imageCount+10).forEach(url => {fetchImage(url)})
  imageCount += 10
}

function fetchImage(url){
  fetch(url)
    .then(res => res.json())
    .then(json => {getImage(json)});
}

function getImage(json){
  currentImages.push(json)
  if (searchWasJustSubmitted && currentImages.length === 10) {
    renderCenterImage(currentImages[imageIndex])
    renderNextImage(currentImages[imageIndex + 1])
    renderPrevImage(currentImages[imageIndex + 2]) // remove later
  }
}

// function imageRender(json){
//   const div = document.createElement('div')
//   div.innerHTML =
//     `<h2>${json.title} ${json.date}</h2>
//     <figure>
//       <img src=${json.url} width="80%">
//       <figcaption>Courtesy of: ${json.copyright}</figcaption>
//     </figure>
//     <p>${json.explanation}</p>`
//   results.appendChild(div);
// }

function checkUrls(urls){
  urls = urls.filter(url => {
    const date = new Date(url.slice(-10))
    return (date > firstImageDate && date < today)
  })
  return urls
}


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
