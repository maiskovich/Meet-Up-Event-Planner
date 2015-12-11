/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('1Meetup')
    .constant('malarkey', malarkey)
    .constant('firebaseUrl', "https://shining-fire-3086.firebaseio.com")
    .constant('moment', moment);

})();
