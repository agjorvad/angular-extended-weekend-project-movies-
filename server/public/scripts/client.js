console.log('js');

var app = angular.module("movieCollectionApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesController as vm'
    })
.when('/genres', {
    templateUrl: 'views/genres.html',
    controller: 'GenresController as vm'
})
.otherwise({
    templae: '<h2>404</h2>'
});
});