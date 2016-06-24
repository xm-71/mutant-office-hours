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
    isLoggedIn: isLoggedIn,
    auth: auth,

  };

return service;

//sepppppp

function register(user){
  return auth.$createUserWithEmailAndPassword(user.email, user.password)
}

function login(user){
  return auth.$signInWithEmailAndPassword(user.email, user.password)
}

function logout(){
  return auth.$signOut();
}

function isLoggedIn(){
  return auth.$getAuth();
}

}

})();
