'use strict';

angular.module('getStockApp')
  .controller('MainCtrl', function ($scope, Stock) {
   	  	$scope.stock = {ticker: "", price: "", exchange: "", name: "", query: ""};

   	  	$scope.getStock = function(){
   	  		Stock.getTicker($scope.stock.query).then(function(response){
   	  			$scope.stock.ticker = response;
   	  		});
   	  		Stock.getName($scope.stock.query).then(function(response){
   	  			$scope.stock.name = response;
   	  		});
          Stock.getExchange($scope.stock.query).then(function(response){
            $scope.stock.exchange = response;
          })
   	  	};
  });
