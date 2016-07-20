(function() {
  'use strict';

  function localStorageSvc() {
    return {
      setShows: setShows,
      getShows: getShows,
      deleteShows: deleteShows,
      setZip: setZip,
      getZip: getZip
    };
  }

  function setShows(shows) {
    localStorage.setItem('shows', JSON.stringify(shows));
  }

  function getShows() {
    var shows = localStorage.getItem('shows');
    return JSON.parse(shows);
  }

  function deleteShows() {
    localStorage.clear();
  }

  function setZip(zip) {
    localStorage.setItem('zip', JSON.stringify(zip));
  }

  function getZip() {
    var zip = localStorage.getItem('zip');
    return JSON.parse(zip);
  }

  angular
    .module('app.data')
    .factory('localStorageSvc', localStorageSvc);

}());
