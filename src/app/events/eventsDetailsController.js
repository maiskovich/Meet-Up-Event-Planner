(function () {
  'use strict';
  angular
    .module('1Meetup')
    .controller('EventsDetailsController', EventsDetailsController);

  /** @ngInject */
  function EventsDetailsController($scope, $firebaseArray, firebaseUrl, $stateParams, $log) {
    var vm = this;
    var $ref = new Firebase(firebaseUrl);
    // create a synchronized array
    $scope.eventsArray = $firebaseArray($ref);
    // Item List Arrays
    $scope.guests = [];


  }


})();
