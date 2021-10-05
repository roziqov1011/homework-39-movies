var elMovies = $_(".movies");
var elTemplate = $_("#movies-template").content;

elMovies.innerHTML = "";

var createMoviesElement = function (movie){
    var elNewMovie = elTemplate.cloneNode(true);

    elNewMovie.querySelector(".movies__img").src ="https://www.youtube.com/embed/"+movie.ytid;
    elNewMovie.querySelector(".movies__title").textContent = movie.Title;
    elNewMovie.querySelector(".movies__categories").textContent = movie.Categories;
    elNewMovie.querySelector(".movies__id").href ="https://www.youtube.com/watch?v="+ movie.ytid;
    elNewMovie.querySelector(".movies__id").target = "_blank";
    return elNewMovie;
}

movies.forEach(function (movie) {
    elMovies.appendChild(createMoviesElement(movie));
});

console.log(movies);


