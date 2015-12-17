(function () {
  'use strict';
  angular
    .module('1Meetup')
    .directive('autofocus', autofocus);

  /** @ngInject */
  function autofocus($timeout) {
    var directive = {
      link: linkFunc
    };

    return directive;
    function linkFunc($scope, $element) {
      $timeout(function () {
        $element[0].focus();
      });
    }
  }
})();
