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
    $scope.messages = $firebaseArray($ref);
    // download the data into a local object
    vm.data = $firebaseObject($ref);
    $scope.message = null;
    $scope.error = null;


    $scope.add = function() {

      Auth.$createUser({
        username: $scope.username,
        email: $scope.email,
        password:$scope.pass,
        birthday:optional($scope.birthday),
        employer:optional($scope.employer),
        jobtitle:optional($scope.jobtitle)
      }).then(function(userData) {
        $scope.message = "User created with uid: " + userData.uid;
        $state.go('home');
      }).catch(function(error) {
        $scope.error = error;
        alert(error);
      });
      function optional(field) {
        if (field) {
          return field;
        } else {
          return null;
        }
      };

      $scope.username = '';
      $scope.email = '';
      $scope.pass='';
      $scope.birthday='';
      $scope.employer='';
      $scope.jobtitle='';

    };

  }
})();
