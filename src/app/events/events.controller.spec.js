(function () {
  'use strict';

  describe('controllers', function () {
    var vm;
    var $timeout;

    beforeEach(module('1Meetup'));
    beforeEach(inject(function (_$controller_, _$timeout_) {

      vm = _$controller_('MainController');
      $timeout = _$timeout_;
    }));

    it('should create an event', function () {

    });


  });
})();
