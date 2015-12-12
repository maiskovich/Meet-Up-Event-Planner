(function () {
  'use strict';
  angular
    .module('1Meetup')
    .controller('EventsController', EventsController);

  /** @ngInject */
  function EventsController($scope, $firebaseObject, $firebaseArray, firebaseUrl, Auth, $state, $log) {
    var vm = this;
    var $ref = new Firebase(firebaseUrl);

    var d = new Date();
    d.setHours(0);
    d.setMinutes(0);
    $scope.duration = d;
    $scope.$watchGroup(['start', 'duration'], function (newValue, oldValue) {
      var startDate = new Date($scope.start);
      startDate.setHours(startDate.getHours() + $scope.duration.getHours());
      startDate.setMinutes(startDate.getMinutes() + $scope.duration.getMinutes());

      $scope.finish = startDate;
    });

    // Item List Arrays
    $scope.guests = [];

    $scope.addGuest = function () {
      $scope.guests.push($scope.guest);
      $scope.guest = '';
      $log.log($scope.guests);
    };
    $scope.removeGuest = function (guest) {
      var index = $scope.guests.indexOf(guest);
      $scope.guests.splice(index, 1);
    }


  }


})();
