app.controller("GenresController", ['GenresService', '$http', function (GenresService, $http) {
    console.log('GenresController loaded');
    var self = this;

    self.addGenre = GenresService.addGenre;
    self.newGenre = GenresService.newGenre;
    self.genre = GenresService.genre;
    self.getAllGenres = GenresService.getAllGenres;
    self.deleteGenre = GenresService.deleteGenre;
    self.getAllGenres();
}]);