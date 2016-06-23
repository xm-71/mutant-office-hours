(function(){
'use strict';

angular.module('mutantApp.auth').factory('authService', authService);

authService.$inject = ['$firebaseAuth'];

function authService($firebaseAuth){
  var auth = $firebaseAuth();
  var service = {
    register: register,

  };

return service;

//sepppppp

function register(user){
  return auth.$createUserWithEmailAndPassword(user.email, user.password)
}

}

})();
