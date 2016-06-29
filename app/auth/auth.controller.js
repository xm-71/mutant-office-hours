Skip to content
Personal Open source Business Explore
Join GitHubSign inPricingBlogSupport
This repository
Search
 Watch 1  Star 0  Fork 2 xternbootcamp16/mutant-office-hours
 Code  Issues 0  Pull requests 1  Pulse  Graphs
Branch: morning Find file Copy pathmutant-office-hours/app/auth/auth.controller.js
a1bd25f  22 hours ago
 Seth Baughman Add vm.error to AuthController and set it in .catch of login and regi…
0 contributors
RawBlameHistory     47 lines (38 sloc)  929 Bytes
(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authService'];

  function AuthController($state, authService) {
    var vm = this;

    vm.register = register;
    vm.login = login;
    vm.error = null;

    vm.user = {
      email: '',
      password: ''
    };

    function register(user) {
      return authService.register(user)
        .then(function() {
          vm.login(user);
        })
        .then(function() {
          return authService.sendWelcomeEmail(user.email);
        })
        .catch(function(error) {
          vm.error = error;
        });
    }

    function login(user) {
      return authService.login(user)
        .then(function(loggedInUser) {
          $state.go('mutantList');
        })
        .catch(function(error) {
          vm.error = error;
        });
    }

  }
})();
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help
