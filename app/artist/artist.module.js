(function() {
  'use strict';

  angular
    .module('app.artist', [])
    .config(function($sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist([
     // Allow same origin resource loads.
     'self',
     'http://audio.itunes.apple.com/**',
     'http://*.phobos.apple.com/**']);
    });

}());
