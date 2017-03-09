angular.module('personal', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "views/home.html",
        controller: 'mainCtrl'
      })
      .state('me', {
        url: '/me',
        templateUrl: "views/me.html",
        controller: 'mainCtrl'
      })
      .state('skillz', {
        url: '/skillz',
        templateUrl: "views/skillz.html",
        controller: 'mainCtrl'
      })

      $urlRouterProvider
          .otherwise('/');
})
