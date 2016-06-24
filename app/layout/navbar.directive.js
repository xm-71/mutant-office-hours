(function(){
'use strict';

angular.module('mutantApp.layout').directive('xtNavbar', xtNavbar);

function xtNavbar(){
  return {
    templateUrl: 'app/layout/navbar.html',
    restrict: 'E',
  }
}

})();
