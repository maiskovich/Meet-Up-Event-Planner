(function () {
  'use strict';
  angular
    .module('1Meetup')
    .controller('EventsDetailsController', EventsDetailsController);

  /** @ngInject */
  function EventsDetailsController($scope, $firebaseObject, $firebaseArray, firebaseUrl, $stateParams, $log) {
    var vm = this;
    var $ref = new Firebase(firebaseUrl);
    var key = $stateParams.key;
    // create a synchronized array
    $scope.data = $firebaseObject($ref);
    $ref.on("value", function (snapshot) {
      console.log(snapshot.val().key);
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    $log.log($scope.data);




    // Item List Arrays
    $scope.guests = [];


  }


})();
