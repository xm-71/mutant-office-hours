(function() {
  'use strict';

  angular.module('mutantApp', [
    // Angular modules
    'ui.router',

    // 3rd Party modules
    'firebase',

    // Custom modules
    'mutantApp.home',
    'mutantApp.mutantList',
    'mutantApp.auth'
  ]);
})();
