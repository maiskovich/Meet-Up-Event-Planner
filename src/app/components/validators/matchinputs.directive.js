(function () {
  'use strict';
  angular
    .module('1Meetup')
    .directive('matchInputs', matchInputs);

  /** @ngInject */
  function matchInputs() {
    var directive = {
      require: 'ngModel',
      link: linkFunc
    };
    return directive;
    function linkFunc(scope, elm, attrs, ctrl) {
      ctrl.$validators.matchInputs = function (modelValue, viewValue) {
        if (scope.$eval(attrs.matchInputs) == viewValue) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    };
  };

})();
