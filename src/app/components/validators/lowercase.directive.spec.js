describe('directive lowercase', function () {
  var $scope, form;
  beforeEach(module('1Meetup'));
  beforeEach(inject(function ($compile, $rootScope) {
    $scope = $rootScope;
    var element = angular.element(
      '<form name="form">' +
      '<input ng-model="model.somenum" name="somenum" lower-case />' +
      '</form>'
    );
    $scope.model = {somenum: null}
    $compile(element)($scope);
    form = $scope.form;
  }));

  describe('lowercase', function () {
    it('should pass with lowercase character', function () {
      form.somenum.$setViewValue('c');
      $scope.$digest();
      expect($scope.model.somenum).toEqual('c');
      expect(form.somenum.$valid).toBe(true);
    });
    it('should not pass with uppercase character', function () {
      form.somenum.$setViewValue('C');
      $scope.$digest();
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });
  });
});
