app.controller("MoviesController", ['MoviesService', function (MoviesService) {
    console.log('MoviesController loaded');
    var self = this;

    self.newMovie = MoviesService.newMovie;
    self.addMovie = MoviesService.addMovie;
    self.getAllMovies = MoviesService.getAllMovies;
    self.getAllMovies();
}]);