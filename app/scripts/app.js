'use strict';

angular.module('getStockApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          Stock: function (Stock){
            return Stock;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
