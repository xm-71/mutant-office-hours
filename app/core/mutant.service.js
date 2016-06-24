(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('mutantService', mutantService);

  mutantService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function mutantService($firebaseArray, firebaseDataService) {
    var service = {
      Mutant: Mutant,
      mutants: $firebaseArray(firebaseDataService.mutants),
      mutantsByUser: mutantsByUser,
    };

    return service;

    function Mutant() {
      this.name = '';
      this.phone = '';
      this.topic = '';
      this.notified = false;
      this.complete = false;
    }

    function mutantsByUser(uid){
      return $firebaseArray(firebaseDataService.users.child(uid).child('mutants'));
    }
  }
})();
