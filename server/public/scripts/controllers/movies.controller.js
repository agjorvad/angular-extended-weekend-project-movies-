app.controller("MoviesController", ['MoviesService', 'GenresService', '$http', function (MoviesService, GenresService, $http) {
    console.log('MoviesController loaded');
    var self = this;
    
    self.newMovie = MoviesService.newMovie;
    self.addMovie = MoviesService.addMovie;
    self.getAllMovies = MoviesService.getAllMovies;
    self.deleteMovie = MoviesService.deleteMovie;
    self.movie = MoviesService.movie;
    self.addGenre = GenresService.addGenre;
    self.newGenre = GenresService.newGenre;
    self.genre = GenresService.genre;
    self.getAllGenres = GenresService.getAllGenres;
    self.getAllMovies();
    self.getAllGenres();
    
    
}]);