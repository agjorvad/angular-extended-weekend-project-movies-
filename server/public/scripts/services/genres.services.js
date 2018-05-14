app.service('GenresService', function ($http) {
    console.log('GenresService is loaded');
    var self = this;

    self.newGenre = { project: '' }

    self.genre = { list: [] };

    self.addGenre = function () {
        $http({
            method: 'POST',
            url: '/genre',
            data: self.newGenre
        })
            .then(function (response) {
                console.log('/genre POST successful');
                self.getAllGenres();
            })
            .catch(function (error) {
                console.log('/genre POST unsuccessful', error);
            })
    }

    self.getAllGenres = function () {
        $http({
            method: 'GET',
            url: '/genre'
        })
            .then(function (response) {
                console.log('/genre GET successful');
                self.genre.list = response.data;
                console.log(self.genre.list);
            })
            .catch(function (response) {
                console.log('/genre GET unsuccessful');
            })
    }
    self.getAllGenres();

    self.deleteGenre = function (genre) {
        console.log(genre);
        console.log('button click is working');
        if (genre.total_count == 0) {
        $http({
            method: 'DELETE',
            url: '/genre',
            params: genre
        })
            .then(function (response) {
                console.log(response);
                self.getAllGenres();
            })
            .catch(function (error) {
                console.log('error on /genre DELETE', error);
            })
        }else {
            alert('Genre contains movies and cannot be deleted');
        }
    }
});