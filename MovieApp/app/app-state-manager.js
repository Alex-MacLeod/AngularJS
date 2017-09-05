"use strict";

(function () {

    movieApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/#");

        $stateProvider.state("movies", {
            url: "/movies",
            templateUrl: "app/features/movies/movies.html"
        }).state("other", {
                url: "/other",
                templateUrl: "app/features/other/other.html"
        })
    });
}());