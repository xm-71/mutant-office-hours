(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('textMessageService', textMessageService);

  textMessageService.$inject = ['firebaseDataService'];

  function textMessageService(firebaseDataService) {
    var service = {
      sendText: sendText,
    };

    return service;

    //seppppp

    function sendText(mutant, mutants) {
      var newText = {
        topic: mutant.topic,
        name: mutant.name,
        phoneNumber: mutant.phone
      };
      firebaseDataService.texts.push(newText);
      mutant.notified = true;
      mutants.$save(mutant);
    }
  }
})();
