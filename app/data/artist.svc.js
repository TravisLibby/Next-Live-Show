(function() {
  'use strict';

  function artistSvc($http, $q) {
    return {
      getBandInfo: getBandInfo
    };

    function getBandInfo(artist) {
      var defer = $q.defer();

      $http.jsonp('https://itunes.apple.com/search?term=' + artist.split(' ').join('+'), {
        params: {
          "callback": "JSON_CALLBACK"
        }
      })
        .success(function(response) {
          defer.resolve(response);
        })
        .error(function(error) {
          defer.reject(error);
        });

        return defer.promise;
    }
  }

  angular
    .module('app.data')
    .service('artistSvc', artistSvc);

}());
