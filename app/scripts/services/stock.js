'use strict';

angular.module('getStockApp')
  .service('Stock', function($http) {
  	this.echoSymbol = function(endpoint) {
  		return 'http://echo.jsontest.com/'+ endpoint + '?callback=JSON_CALLBACK';
  	}

  	this.echoTicker = function(symbol){
  		var url = this.echoSymbol("value/" +symbol);

  		return $http.jsonp(url).then(function(response){
  			return response.data.value
  		});
  	}

    // this.getName = function(symbol){

    // }
  });
