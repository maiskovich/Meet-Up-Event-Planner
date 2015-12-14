(function () {
  'use strict';
  angular
    .module('1Meetup')
    .controller('EventsController', EventsController);

  /** @ngInject */
  function EventsController($scope, $firebaseArray, firebaseUrl, Auth, $state, locationApi, $log) {
    var vm = this;
    $scope.page = 1;
    var $ref = new Firebase(firebaseUrl);
    // create a synchronized array
    $scope.eventsArray = $firebaseArray($ref);
    var d = new Date();
    d.setHours(0);
    d.setMinutes(0);
    $scope.duration = d;
    $scope.$watchGroup(['start', 'duration'], function (newValue, oldValue) {
      $log.log($scope.eventForm);
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
    };
    $scope.removeGuest = function (guest) {
      var index = $scope.guests.indexOf(guest);
      $scope.guests.splice(index, 1);
    }

    navigator.geolocation.getCurrentPosition(function (position) {

      var location = position;
      locationApi.get({ll: location['coords']['latitude'] + ',' + location['coords']['longitude']}, function (placesResult) {
        if (placesResult.response.groups) {
          $scope.places = placesResult.response.groups[0].items;
          $scope.totalRecordsCount = placesResult.response.totalResults;

        }
        else {
          $scope.places = [];
          $scope.totalRecordsCount = 0;
        }
      });
    });

    $scope.add = function () {
      $scope.eventsArray.$add({
        eventname: $scope.eventname,
        eventtype: $scope.eventtype,
        host: $scope.host,
        start: $scope.start.toString(),
        duration: $scope.duration.getHours() + ':' + (($scope.duration.getMinutes() < 10 ? '0' : '') + $scope.duration.getMinutes()),
        finish: $scope.finish.toString(),
        guests: $scope.guests,
        location: $scope.location,
        description: optional($scope.description)
      }).then(function () {
        $state.go('home');
      });
      ;

      function optional(field) {
        if (field) {
          return field;
        } else {
          return null;
        }
      };


    };


  }


})();
