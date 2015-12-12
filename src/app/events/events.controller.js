(function () {
  'use strict';
  angular
    .module('1Meetup')
    .controller('EventsController', EventsController);

  /** @ngInject */
  function EventsController($scope, $firebaseObject, $firebaseArray, firebaseUrl, Auth, $state) {
    var vm = this;
    var $ref = new Firebase(firebaseUrl);
  }


})();
