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
    var data = $firebaseObject($ref);
    data.$loaded().then(function (data) {
      $scope.event = data[key];
      $log.log($scope.event);
    });



    // Item List Arrays
    $scope.guests = [];


  }


})();
