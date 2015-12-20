describe('directive matchinputs', function () {
  var $scope, form;
  beforeEach(module('1Meetup'));
  beforeEach(inject(function ($compile, $rootScope) {
    $scope = $rootScope;
    // Here is the outer scope information defined, what we want to get into the directive
    $scope.outerScopeInfo = {
      name: 'pass'
    }
    var element = angular.element(
      '<form name="form">' +
      '<input ng-model="model.pass" name="pass"  />' +
      '<input ng-model="model.pass2" name="pass2" match-inputs="model.pass" />' +
      '</form>'
    );

    $compile(element)($scope);
    form = $scope.form;
    $scope.$digest();
  }));

  describe('matchinputs', function () {
    it('should pass with same input', function () {
      form.pass.$setViewValue('asd');
      form.pass2.$setViewValue('asd');
      $scope.$digest();
      expect($scope.model.pass2).toEqual('asd');
      expect(form.pass2.$valid).toBe(true);
    });
    it('should not pass with different inputs', function () {
      form.pass.$setViewValue('asd');
      form.pass2.$setViewValue('asdd');
      $scope.$digest();
      expect(form.pass2.$valid).toBe(false);
    });
  });
});
