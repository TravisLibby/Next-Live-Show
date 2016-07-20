(function() {
  'use strict';

  function showsSvc($http, $q, datesSvc) {
    return {
      getShowsByZip: getShowsByZip
    };

    function getShowsByZip(zip, weeks) {
      var defer = $q.defer();
      var startDate = datesSvc.getTodaysDate();
      var endDate = datesSvc.getEndDate(weeks);

      $http.get('http://api.jambase.com/events?&radius=50&startDate=' + startDate + '&endDate=' + endDate + '&page=0&api_key=nnctcmw3gm9hj7rsxv6mtajm&zipCode=' + zip)
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
    .factory('showsSvc', showsSvc);

}());
