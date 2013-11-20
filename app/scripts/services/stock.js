'use strict';

angular.module('getStockApp')
  .service('Stock', function($http) {
  	this.jsonPUrl = function(endpoint) {
  		return 'http://echo.jsontest.com/'+ endpoint + '?callback=JSON_CALLBACK';
  	}

  	this.echoTicker = function(symbol){
  		var url = this.jsonPUrl("value/" +symbol);

  		return $http.jsonp(url).then(function(response){
  			return response.data.value
  		});
  	}
  });
