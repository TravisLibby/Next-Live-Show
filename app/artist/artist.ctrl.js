(function() {
  'use strict';

  function ArtistController($scope, artistSvc, $routeParams, $sce) {
    $scope.currentArtist = $routeParams.artist;
    $scope.isSearching = true;

    if ($routeParams.artist !== undefined) {
      artistSvc.getBandInfo($routeParams.artist)
        .then(function(response) {
          $scope.songs = response.results;
          $scope.isSearching = false;
        }, function(error) {
          throw error;
        });
    }

  }

  angular
    .module('app.artist')
    .controller('ArtistController', ArtistController);

}());
