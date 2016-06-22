(function(){
  'use strict';

  angular
  .module('mutantApp.auth')
  .controller('AuthController', AuthController);

  AuthController.$inject = ['$firebaseAuth'];

  function AuthController($firebaseAuth) {
    var vm = this;


    vm.register = register;
    vm.user = {
      email: '',
      password: ''
    };

    function register(){

    }
  }

})();
