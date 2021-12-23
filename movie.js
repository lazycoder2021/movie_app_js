window.addEventListener('DOMContentLoaded', async function () {
    const castWrapper = document.querySelector('.cast-wrapper');
    const loadMore = document.querySelector('.loadMore');
    const movieSectionWrapper = document.querySelector('.movie-section-wrapper');
    const params = window.location.search;
    const q = new URLSearchParams(params).get('q');
    console.log(q)
    const response = await fetch(`https://api.themoviedb.org/3/movie/${q}?api_key=6c7d27503ce09c584ac2ee601fd22e1b`);
    const movieDetails = await response.json();
    console.log(movieDetails)

    movieSectionWrapper.innerHTML = `<div class="movie-poster">
                <div class="movie-poster-image">
                    <img src="https://image.tmdb.org/t/p/w300/${movieDetails.backdrop_path}"/>
                </div>
            </div>
            <div class="movie-content">
                <div class="movie-header">
                    <div class="movie-title">
                        <h2 class="heading">${movieDetails.original_title}</h2>
                        <span><b>Tagline:</b>&nbsp;${movieDetails.tagline}</span>
                        <p class="movie-desc"><b>Description:</b>&nbsp;${movieDetails.overview}</p>
                    </div>
                    <div class="movie-details">
                        <p><b>Release Date:</b>&nbsp;${movieDetails.release_date}</p> &nbsp;&nbsp; <p><b>Runtime:</b> &nbsp;${movieDetails.runtime}mins</p> &nbsp;&nbsp; <b>Genre:</b> &nbsp;${movieDetails.genres[0]}
                    </div>
                    <div class="movie-detailsR">
                        <p><b>Rating:</b>&nbsp;${movieDetails.vote_average} <b>Votes:</b>&nbsp;${movieDetails.vote_count}</p>
                    </div>
                </div>
            </div>`;
    console.log(movieDetails.poster_path)
    console.log(movieDetails.genres[0])
    console.log(movieDetails.original_title)
    console.log(movieDetails.overview)
    console.log(movieDetails.release_date)
    console.log(movieDetails.runtime)
    console.log(movieDetails.tagline)
    console.log(movieDetails.spoken_languages[0].name)


    // LOAD MORE BUTTON

    loadMore.addEventListener('click', async function () {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${q}/credits?api_key=6c7d27503ce09c584ac2ee601fd22e1b&limit=19`);
        const movieCast = await response.json();
        const characters = movieCast.cast;
        console.log(characters)
        characters.map((character) => {
            console.log(character)
            castWrapper.innerHTML += `
                        <div class="cast-member">
                            <div class="cast-member-image">
                                <img src="https://image.tmdb.org/t/p/w300/${character.profile_path}" />
                            </div>
                        <div class="cast-member-details">
                            <h3>${character.character}</h3>
                            <p>${character.name}</p>
                        </div>
                    </div>`
        })
    })



})

