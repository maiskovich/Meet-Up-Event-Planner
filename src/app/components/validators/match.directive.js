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
    function linkFunc(scope, elem, attrs, ngModel) {
      ngModel.$parsers.unshift(validate);

      // Force-trigger the parsing pipeline.
      scope.$watch(attrs.matchInputs, function () {
        ngModel.$setViewValue(ngModel.$viewValue);
      });

      function validate(value) {
        var isValid = scope.$eval(attrs.matchInputs) == value;

        ngModel.$setValidity('matchInputs', isValid);

        return isValid ? value : undefined;
      }
    };
  };

})();
