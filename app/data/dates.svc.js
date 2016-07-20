(function() {
  'use strict';

  function datesSvc($http, $q) {
    return {
      getTodaysDate: getTodaysDate,
      getEndDate: getEndDate
    };
  }

  function getTodaysDate() {
    return formatDate(new Date());
  }

  function getEndDate(weeks) {
    if (weeks === 2) {
      var now = new Date();
      return formatDate(new Date(now.setDate(now.getDate()+14)));
    }
  }

  function formatDate(date) {
    var dd = date;
    var yy = dd.getYear();
    var mm = dd.getMonth() + 1;
    dd = dd.getDate();
    if (yy < 2000) { yy += 1900; }
    if (mm < 10) { mm = "0" + mm; }
    if (dd < 10) { dd = "0" + dd; }
    var rs = yy + "-" + mm + "-" + dd;
    return rs;
  }


  angular
    .module('app.data')
    .factory('datesSvc', datesSvc);

}());
