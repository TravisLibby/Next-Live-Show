(function() {
  'use strict';

  function SearchController($scope, showsSvc, localStorageSvc) {
    angular.element(document).ready(function () {
      localStorageSvc.deleteShows();
    });

    if (localStorage.length > 0) {
      $scope.shows = localStorageSvc.getShows();
      $scope.zipCode = localStorageSvc.getZip();
    }

    $scope.isSearching = false;

    $scope.$on('search', function(evt, data) {
      // clear localstorage
      localStorageSvc.deleteShows();
      $scope.isSearching = true;
      showsSvc.getShowsByZip(data.zip, data.weeks)
        .then(function(response) {
          $scope.isSearching = false;
          $scope.shows = response.Events;
          // store the shows and current zip code in localstorage
          localStorageSvc.setShows($scope.shows);
          localStorageSvc.setZip(data.zip);
          $scope.zipCode = localStorageSvc.getZip();

        }, function(error) {
          $scope.isSearching = false;
          throw error;
        });
    });

  }

  angular
    .module('app.search')
    .controller('SearchController', SearchController);

}());
