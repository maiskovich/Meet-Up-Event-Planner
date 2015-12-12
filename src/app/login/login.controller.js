(function() {
  'use strict';
  angular
    .module('1Meetup')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, Auth, $state) {
    var vm = this;


    $scope.authenticate = function() {
      $scope.authData = null;
      $scope.error = null;

      Auth.$authWithPassword({
        email: $scope.email,
        password: $scope.pass
      }).then(function (authData) {
        $scope.authData = authData;
        $state.go('home');
      }).catch(function (error) {
        $scope.error = error;
        alert('Wrong email or password');
      });
    }
  }
})();
