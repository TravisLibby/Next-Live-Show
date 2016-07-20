(function() {
  'use strict';

  angular
    .module('app.loader.component')
    .directive('liveShowsLoader', function() {
      return {
        restrict: 'AE',
        template: '<div><img src="../images/loader.svg" /></div>'
      };
    });

}());
