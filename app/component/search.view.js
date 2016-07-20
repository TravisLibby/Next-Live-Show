(function() {
  'use strict';

  angular
    .module('app.search.component')
    .directive('liveShowsSearch', function() {
      return {
        templateUrl: 'app/component/search-form.html',
        controller: SearchFormCtrl
      };
    });

    function SearchFormCtrl($scope) {
      $scope.search = function(zip, weeks) {
        $scope.$emit('search', {zip: parseInt(zip, 10), weeks: weeks});
      };
    }

}());
