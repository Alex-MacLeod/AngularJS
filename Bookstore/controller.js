(function() {
    var FilmController =  function($http) {
        var vm = this;
        vm.reverse =false;
        vm.films = [{
            'Director': 'James Herbert',
            'Title': 'Rats',
            'Genre': 'Horror',
            'Released': '1988'

        }, {
            'Director': 'J K Rowling',
            'Title': 'Harry Potter',
            'Genre': 'Fantasy',
            'Released': '1998'
        }, {
            'Director': 'Stephen King',
            'Title': 'Carrie',
            'Genre': 'Horror',
            'Released': '1984'
        }];

        vm.doSort = function() {
            vm.sortby = 'Title';
            vm.reverse= !vm.reverse
        };

        vm.gitDetails = function() {
            $http.get("https://api.github.com/users/AlexMacLeod23")
            .then(function(response) {
                vm.gitHubDetails = response.data;
            });
        };
    };
    demoApp.controller('FilmController', ['$http', FilmController]);
}());