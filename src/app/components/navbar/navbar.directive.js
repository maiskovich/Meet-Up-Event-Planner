(function() {
  'use strict';

  angular
    .module('1Meetup')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(Auth, $state) {
      var vm = this;
      vm.auth = Auth;
      vm.isCollapsed = true;

      vm.logOut = function () {
        $state.go('home');
      }
      // any time auth status updates, add the user data to scope
      vm.auth.$onAuth(function (authData) {
        vm.authData = authData;
      });


    }
  }

})();
