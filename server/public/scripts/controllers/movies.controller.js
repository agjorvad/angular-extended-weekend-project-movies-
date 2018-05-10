app.controller("MoviesController", ['MoviesService', '$http', function (MoviesService, $http) {
    console.log('MoviesController loaded');
    var self = this;
    
    self.newMovie = MoviesService.newMovie;
    self.addMovie = MoviesService.addMovie;
    self.getAllMovies = MoviesService.getAllMovies;
    self.deleteMovie = MoviesService.deleteMovie;
    self.movie = MoviesService.movie;
    self.getAllMovies();
    
    
}]);