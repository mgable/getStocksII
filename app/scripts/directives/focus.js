'use strict';

angular.module('getStockApp')
  .directive('focus', function () {
    return {
      link: function postLink(scope, element, attrs) {
        element[0].focus();
      }
    };
  });
