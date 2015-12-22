(function () {
  'use strict';
  angular
    .module('1Meetup')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, Auth, $state) {
    var vm = this;


    vm.authenticate = function () {
      vm.authData = null;
      vm.error = null;

      Auth.$authWithPassword({
        email: vm.email,
        password: vm.pass
      }).then(function (authData) {
        vm.authData = authData;
        $state.go('home');
      }).catch(function (error) {
        vm.error = error;
        alert('Wrong email or password');
      });
    }
  }
})();
