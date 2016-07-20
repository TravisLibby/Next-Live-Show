(function() {
  'use strict';

  function ShellController($scope, $route) {
    // Expose $route to child controllers to see what page we're on
    $scope.$route = $route;
  }

  angular
    .module('app.shell')
    .controller('ShellController', ShellController);

}());
