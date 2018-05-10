app.service('MoviesService', function ($http) {
    console.log('MoviesService is loaded');
    var self = this;

self.newMovie= {name: '', genre: '', release_date: '', run_time: ''};

self.movie = {list: [] };

self.getAllMovies = function() {
    $http({
        method: 'GET',
        url: '/movie'
    })
    .then(function (response) {
        console.log(response);
        self.movie.list = response.data;
        console.log(self.movie.list);
    })
    .catch(function (error) {
        console.log('error on /genre GET', error);
    });
    }
    self.getAllMovies();

self.addMovie = function () {
    console.log( 'button click is working');
    $http({
        method: 'POST',
        url: '/movie',
        data: self.newMovie
    })
    .then(function (response) {
        console.log('POST TO /movie successful');
        self.getAllMovies();
    })
    .catch(function (error) {
        console.log('POST to /movie unsuccessful', error);
    })
}

self.deleteMovie = function (movie) {
console.log(movie);
    console.log('button click is working');
    $http({
        method: 'DELETE',
        url: '/movie',
        params: movie
    })
    .then(function(response) {
        console.log(response);
        self.getAllMovies();
    })
    .catch(function(error) {
        console.log('error on /movie DELETE', error);
    })
}

});