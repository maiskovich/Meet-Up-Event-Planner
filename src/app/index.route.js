(function() {
  'use strict';

  angular
    .module('1Meetup')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/events/list.html',
        controller: 'EventsController',
        controllerAs: 'main'
      })
      .state('register', {
        url: '/login/register',
        templateUrl: 'app/login/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .state('login', {
        url: '/login/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('eventsDetails', {
        url: '/events/view/:key',
        templateUrl: 'app/events/details.html',
        controller: 'EventsDetailsController',
        controllerAs: 'event'
      })
      .state('events', {
        url: '/events/',
        templateUrl: 'app/events/create.html',
        controller: 'EventsController',
        controllerAs: 'events',
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Auth", function (Auth) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireAuth();
          }]
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
