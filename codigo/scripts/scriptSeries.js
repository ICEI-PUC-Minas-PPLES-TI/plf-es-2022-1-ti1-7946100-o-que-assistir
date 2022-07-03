const API_KEY = 'api_key=bdea5fe141d78a5b683c6bc6014ed135'
const BASE_URL = 'https://api.themoviedb.org/3'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const searchURLS = BASE_URL + '/search/tv?'+API_KEY
const URLParams = new URLSearchParams(window.location.search)
const SERIES_URL = BASE_URL + '/tv/popular?'+API_KEY+'&language=pt-BR'

const form2 =  document.getElementById('form2');
const search = document.getElementById('search');


const mainPage = document.getElementById('main')

const mainPageSeries = document.getElementById('mainSeries')

getSeries(SERIES_URL, mainPageSeries)


function getSeries(url,main) {
    fetch(url).then(res => res.json()).then(data => {
        if(data.results.length !== 0){
            showSeries(data.results, main);
            
        }else{
            main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
        }
        
    })
    
}

function showSeries(data, main) {
    main.innerHTML = '';
    
    data.forEach(movie => {
        const {name, poster_path, vote_average, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movieList--item');
        movieEl.id = `${id}`
        movieEl.innerHTML = `
        <div class="informacoes">
            <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${name}">
            
            <div class="movie-info">
                <h3>${name}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
        </div>
        `
        
        main.appendChild(movieEl);
        
        document.getElementById(id).addEventListener('click', () => {
            direcionarSeries(id);
        })
    })
}

function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    
    if(searchTerm) {
        mainPageSeries.innerHTML = ''
        getSeries(searchURLS+'&query='+searchTerm, mainPage)
        
    }else{
        getSeries(API_URL, mainPage);
    }

})

  function direcionarSeries(id) {
    window.location.href = `./detalhesSeries.html?id=${id}`
  }


