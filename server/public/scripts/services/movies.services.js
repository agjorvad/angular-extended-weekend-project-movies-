app.service('MoviesService', function ($http) {
    console.log('MoviesService is loaded');
    var self = this;

    self.newMovie = { name: '', release_date: 'L', run_time: '', genre_id: '', image_path: '' };

    self.movie = { list: [] };

    self.getAllMovies = function () {
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
        console.log('button click is working');
        console.log(self.newMovie);
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
            .then(function (response) {
                console.log(response);
                self.getAllMovies();
            })
            .catch(function (error) {
                console.log('error on /movie DELETE', error);
            })
    }

    // self.saveImage = function (image_path) {
    //     console.log('button click is working');
    //     $http({
    //         method: 'GET',
    //         url: 'https://api.themoviedb.org/3/search/movie?api_key=fbf4a09366b50b45f96c80737b700f7f&language=en-US&query=field%20of%20dreams&page=1&include_adult=false',
    //             // api_key: 'fbf4a09366b50b45f96c80737b700f7f',
    //             // q: image
    //         })
    //         .then(function (response) {
    //             console.log('response from GIPHY people', response.data.data[0].images.downsized.url);
    //             self.src.url= response.data.data[0].images.downsized.url;
    //         })
    //         .catch(function (error) {
    //             console.log('The force was not with us', error);
    //         })
    //     }
});
