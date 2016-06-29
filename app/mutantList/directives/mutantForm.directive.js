(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('xtMutantForm', xtMutantForm);

  function xtMutantForm() {
    return {
      templateUrl: 'app/mutantList/directives/mutantForm.html',
      restrict: 'E',
      controller: MutantFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        mutants: '=',
      },
    };
  }

  MutantFormController.$inject = ['mutantService'];

  function MutantFormController(mutantService) {
    var vm = this;

    vm.addMutant = addMutant;
    vm.newMutant = new mutantService.Mutant();

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new mutantService.Mutant();
    }
  }
})();
