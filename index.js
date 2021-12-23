window.addEventListener('DOMContentLoaded', async function () {
    const popularMovieWrapper = document.querySelector('.popularMovieWrapper');
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6c7d27503ce09c584ac2ee601fd22e1b&language=en-US&page=1');
    const movies = await response.json();
    console.log(movies.results)

    movies.results.map((result) => {
        popularMovieWrapper.innerHTML += `<a href="movie.html?q=${result.id}"><div class="popularMovie">
                                                        <img src='https://image.tmdb.org/t/p/w300/${result.backdrop_path}'/>
                                                       </div></a>`
        console.log(result.backdrop_path)
    })

    //console.log(movies.results[0].backdrop_path)


})

const popularMovieWrapperCopy = document.querySelector('.popularMovieWrapperCopy');
const popularMovieCopy = document.querySelector('.popularMovieCopy');
const search = document.querySelector('.search');
const searchRs = document.querySelector('.search-results');
const popularMovies = document.querySelector('.popularMovies');
const mostPopular = document.querySelector('.mostpopular')
const banner = document.querySelector('.banner')
const searchButton = document.querySelector('.searchbtn');
search.addEventListener('change', async function (e) {
    console.log(e.target.value)
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6c7d27503ce09c584ac2ee601fd22e1b&query=${e.target.value}`);
    const searchResults = await response.json();
    console.log(searchResults);
    banner.classList.add('hide');
    popularMovies.classList.add('hide');
    mostPopular.classList.add('hide');
    searchRs.classList.remove('hide');

    console.log(searchResults.results)

    searchResults.results.map((s) => {
        popularMovieWrapperCopy.innerHTML += `<a href="movie.html?q=${s.id}"><div class="popularMovieCopy">
                                                        <img src='https://image.tmdb.org/t/p/w300/${s.backdrop_path}'/>
                                                   </div></a>`
    })


})

searchButton.addEventListener('click', function () {
    search.value = '';
    popularMovies.classList.remove('hide');
    mostPopular.classList.remove('hide');
    searchRs.classList.add('hide');
    //window.reload(); 

})
    