(function () {
  'use strict';
  angular
    .module('1Meetup')
    .controller('EventsDetailsController', EventsDetailsController);

  /** @ngInject */
  function EventsDetailsController($scope, $firebaseObject, firebaseUrl, $stateParams) {
    var vm = this;
    var $ref = new Firebase(firebaseUrl);
    var key = $stateParams.key;
    // create a synchronized array
    var data = $firebaseObject($ref);
    data.$loaded().then(function (data) {
      vm.event = data[key];
    });


  }


})();
