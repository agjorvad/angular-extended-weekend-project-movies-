app.service('MoviesService', function ($http) {
    console.log('MoviesService is loaded');
    var self = this;

self.newMovie= {name: '', genre: '', releaseDate: '', runTime: ''};

self.movie = {list: [] };

self.addMovie = function () {
    console.log( 'button click is working');
    $http({
        method: 'POST',
        url: '/movie',
        data: self.newMovie
    })
    .then(function (response) {
        console.log('POST TO /movie successful');
    })
    .catch(function (error) {
        console.log('POST to /movie unsuccessful', error);
    })
    self.getAllMovies();
}

self.getAllMovies = function() {
    $http({
        method: 'GET',
        url: '/genre'
    })
    .then(function (response) {
        console.log(response);
        self.movie.list = response.data;
    })
    .catch(function (error) {
        console.log('error on /genre GET', error);
    });
    }
    self.getAllMovies();
});