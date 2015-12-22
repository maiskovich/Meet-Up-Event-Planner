(function () {
  'use strict';

  angular
    .module('1Meetup')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
