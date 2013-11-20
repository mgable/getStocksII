'use strict';

angular.module('getStockApp')
  .controller('MainCtrl', function ($scope, Stock) {
   	  	$scope.stock = {ticker: "", price: "", exchange: "", name: "", query: ""};

   	  	$scope.getStock = function(){
   	  		Stock.echoTicker($scope.stock.query).then(function(response){
   	  			$scope.stock.ticker = response;
   	  		});
   	  	};
  });
