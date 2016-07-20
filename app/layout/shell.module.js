(function() {
  'use strict';

  angular
    .module('app.shell', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/search', {
          templateUrl: 'app/search/search.html',
          controller: 'SearchController',
        })
        .when('/artist/:artist', {
          templateUrl: 'app/artist/artist.html',
          controller: 'ArtistController'
        })
        .when('/about', {
          templateUrl: 'app/about/about.html',
          activeTab: 'about'
        })
        .otherwise('/search');
    });

}());
