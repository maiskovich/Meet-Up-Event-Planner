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
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
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
      });

    $urlRouterProvider.otherwise('/');
  }

})();
