(function () {
  'use strict';
  angular
    .module('1Meetup')
    .controller('EventsController', EventsController);

  /** @ngInject */
  function EventsController($scope, $firebaseArray, firebaseUrl, Auth, $state, locationApi) {
    var vm = this;
    vm.page = 1;
    var $ref = new Firebase(firebaseUrl);
    // create a synchronized array
    vm.eventsArray = $firebaseArray($ref);
    var d = new Date();
    d.setHours(0);
    d.setMinutes(0);
    vm.duration = d;
    $scope.$watchGroup(['vm.start', 'vm.duration'], function (newValue, oldValue) {
      var startDate = new Date(vm.start);
      startDate.setHours(startDate.getHours() + vm.duration.getHours());
      startDate.setMinutes(startDate.getMinutes() + vm.duration.getMinutes());

      vm.finish = startDate;
    });

    // Item List Arrays
    vm.guests = [];

    vm.addGuest = function () {
      vm.guests.push(vm.guest);
      vm.guest = '';
    };
    vm.removeGuest = function (guest) {
      var index = vm.guests.indexOf(guest);
      vm.guests.splice(index, 1);
    }
    //Initialize places before getting the response from Foursquare
    vm.places = [];
    navigator.geolocation.getCurrentPosition(function (position) {

      var location = position;
      locationApi.get({ll: location['coords']['latitude'] + ',' + location['coords']['longitude']}, function (placesResult) {
        if (placesResult.response.groups) {
          vm.places = placesResult.response.groups[0].items;
          vm.totalRecordsCount = placesResult.response.totalResults;

        }
        else {
          vm.places = [];
          vm.totalRecordsCount = 0;
        }
      });
    },
      function (error) {
        alert('Please share your location to get venues suggestions');
      });

    vm.add = function () {
      vm.eventsArray.$add({
        eventname: vm.eventname,
        eventtype: vm.eventtype,
        host: vm.host,
        start: vm.start.toString(),
        duration: vm.duration.getHours() + ':' + ((vm.duration.getMinutes() < 10 ? '0' : '') + vm.duration.getMinutes()),
        finish: vm.finish.toString(),
        guests: vm.guests,
        location: vm.location,
        description: optional(vm.description)
      }).then(function () {
        $state.go('home');
      });


      function optional(field) {
        if (field) {
          return field;
        } else {
          return null;
        }
      }


    };


  }


})();
