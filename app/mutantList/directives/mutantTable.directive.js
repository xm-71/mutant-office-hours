(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('xtMutantTable', xtMutantTable);

  function xtMutantTable() {
    return {
      templateUrl: 'app/mutantList/directives/mutantTable.html',
      restrict: 'E',
      controller: MutantTableController,
      controllerAs: 'vm',
      scope: {
        mutants: '=',
      },
      bindToController: true,
    };
  }

  MutantTableController.$inject = ['textMessageService'];

  function MutantTableController(textMessageService) {
    var vm = this;

    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;

    function deleteMutant(mutant) {
      vm.mutants.$remove(mutant);
    }

    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }

    function sendText(mutant) {
      textMessageService.sendText(mutant, vm.mutants);
    }
  }
})();
