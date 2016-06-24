(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('firebaseDataService', firebaseDataService);

  function firebaseDataService() {
    var root = firebase.database().ref();

    var service = {
      root: root,
      texts: root.child('texts'),
      mutants: root.child('mutants'),
      users: root.child('users'),
    };

    return service;
  }
})();
