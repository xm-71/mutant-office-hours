(function() {
    'use strict';

    angular
        .module('mutantApp.mutantList')
        .controller('MutantListController', MutantListController);

    MutantListController.$inject = ['$firebaseArray'];

    function MutantListController($firebaseArray) {
        var vm = this;
        var mutantRef = firebase.database().ref().child('mutants');
        var textsRef = firebase.database().ref().child('texts');

        vm.addMutant = addMutant;
        vm.newMutant = new Mutant();
        vm.mutants = $firebaseArray(mutantRef);
        vm.deleteMutant = deleteMutant;
        vm.toggleComplete = toggleComplete;
        vm.sendText = sendText;

        function Mutant() {
            this.name = '';
            this.phone = '';
            this.topic = '';
            this.notified = false;
            this.complete = false;
        }

        function addMutant() {
            vm.mutants.$add(vm.newMutant);
        }

        function deleteMutant(mutant) {
            vm.mutants.$remove(mutant);
        }

        function toggleComplete(mutant) {
            vm.mutants.$save(mutants);
        }
        function sendText(mutant){
          //build text object
          var newText = {
            name: mutant.name,
            phoneNumber: mutant.phone,
            topic: mutant.topic
          };
          //save text to firebase
          textsRef.push(newText);
          //change notified to true
          mutant.notified = true;
          //save mutant
          vm.mutants.$save(mutant);
        }
    }
})();
