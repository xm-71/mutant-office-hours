(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['mutantService', 'firebaseDataService'];

  function MutantListController(mutantService, firebaseDataService) {
    var vm = this;

    vm.addMutant = addMutant;
    vm.newMutant = new mutantService.Mutant();
    vm.mutants = mutantService.mutants;
    vm.toggleComplete = toggleComplete;
    vm.deleteMutant = deleteMutant;
    vm.sendText = sendText;

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new mutantService.Mutant();
    }

    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }

    function deleteMutant(mutant) {
      vm.mutants.$remove(mutant);
    }

    function sendText(mutant) {
      var newText = {
        topic: mutant.topic,
        name: mutant.name,
        phoneNumber: mutant.phone
      };
      firebaseDataService.texts.push(newText);
      mutant.notified = true;
      vm.mutants.$save(mutant);
    }
  }

})();
