(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['mutantService', 'firebaseDataService', 'textMessageService', 'user'];

  function MutantListController(mutantService, firebaseDataService, textMessageService, user) {
    var vm = this;

    vm.addMutant = addMutant;
    vm.newMutant = new mutantService.Mutant();
    vm.mutants = mutantService.mutantsByUser(user.uid);
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
      textMessageService.sendText(mutant, vm.mutants);
    }
  }

})();
