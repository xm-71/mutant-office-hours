(function(){
'use strict';

angular.module('mutantApp.auth').factory('authService', authService);

authService.$inject = ['$firebaseAuth'];

function authService($firebaseAuth){
  var auth = $firebaseAuth();
  var service = {
    register: register,
    login: login,
    logout: logout,

  };

return service;

//sepppppp

function register(user){
  return auth.$createUserWithEmailAndPassword(user.email, user.password)
}

function login(user){
  return auth.$signInWithEmailAndPassword(user.email, user.password)
}

function logout(user){
  return auth.$signOut();
}

}

})();
