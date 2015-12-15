(function() {
  'use strict';
  var lowercaseREG = /[a-z]/;
  angular
    .module('1Meetup')
    .directive('lowerCase', lowerCase);

  /** @ngInject */
  function lowerCase() {
  var directive = {
    require: 'ngModel',
    link: linkFunc,
  };

  return directive;
  function linkFunc(scope, elm, attrs, ctrl) {
      ctrl.$validators.lowerCase = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (lowercaseREG.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };

  };
};

})();
