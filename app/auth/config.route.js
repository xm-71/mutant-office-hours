(function(){
  'use strict';

  angular
  .module('mutantApp.auth')
  .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider){
    $stateProvider.state('register', {
      url: '/register',
      templateUrl: 'app/auth/register.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
  }
})();
