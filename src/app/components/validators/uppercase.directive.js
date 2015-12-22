(function () {
  'use strict';
  var uppercaseREG = /[A-Z]/;
  angular
    .module('1Meetup')
    .directive('upperCase', upperCase);

  /** @ngInject */
  function upperCase() {
    var directive = {
      require: 'ngModel',
      link: linkFunc
    };

    return directive;
    function linkFunc(scope, elm, attrs, ctrl) {
      ctrl.$validators.upperCase = function (modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (uppercaseREG.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };

    }
  }

})();
