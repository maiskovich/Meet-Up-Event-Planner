(function() {
  'use strict';
  angular
    .module('1Meetup')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($scope , $firebaseObject, $firebaseArray,firebaseUrl,Auth,$state) {
    var vm = this;
    var $ref = new Firebase(firebaseUrl);
    // create a synchronized array
    vm.messages = $firebaseArray($ref);
    // download the data into a local object
    vm.data = $firebaseObject($ref);
    vm.message = null;
    vm.error = null;


    vm.add = function () {

      Auth.$createUser({
        username: vm.username,
        email: vm.email,
        password: vm.pass,
        birthday: optional(vm.birthday),
        employer: optional(vm.employer),
        jobtitle: optional(vm.jobtitle)
      }).then(function(userData) {
        vm.message = "User created with uid: " + userData.uid;
        $state.go('home');
      }).catch(function(error) {
        vm.error = error;
        alert(error);
      });
      function optional(field) {
        if (field) {
          return field;
        } else {
          return null;
        }
      };

      vm.username = '';
      vm.email = '';
      vm.pass = '';
      vm.birthday = '';
      vm.employer = '';
      vm.jobtitle = '';

    };

  }
})();
