(function() {
  'use strict';

  angular
    .module('app', [
      'app.shell',
      'app.search.component',
      'app.search',
      'app.data',
      'app.artist',
      'app.loader.component'
    ])
    .run(['$route', function($route) {
      $route.reload();
    }]);

}());
