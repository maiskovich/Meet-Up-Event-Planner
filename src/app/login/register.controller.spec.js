(function () {
  'use strict';

  describe('controllers', function () {
    var vm;
    var $timeout;
    var toastr;

    beforeEach(module('1Meetup'));
    beforeEach(inject(function (_$controller_, _$timeout_, _webDevTec_, _toastr_) {

      vm = _$controller_('RegisterController');

    }));
  });

});
