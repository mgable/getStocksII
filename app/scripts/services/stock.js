'use strict';

angular.module('getStockApp')
  .service('Stock', function($http) {
  	this.echoSymbol = function(endpoint) {
  		return 'http://echo.jsontest.com/'+ endpoint + '?callback=JSON_CALLBACK';
  	}

    this.echoName = function (endpoint) {
      return 'http://finance.yahoo.com/webservice/v1/symbols/' + endpoint + '/quote?format=json&callback=JSON_CALLBACK'
    }

    this.echoExchange = function(endpoint){
      return 'http://finance.google.com/finance/info?client=ig&callback=JSON_CALLBACK&q=' + endpoint;
    }

  	this.getTicker = function(symbol){
  		var url = this.echoSymbol("value/" + symbol);

  		return $http.jsonp(url).then(function(response){
  			return response.data.value
  		});
  	}

    this.getName = function(symbol){
      var url = this.echoName(symbol);

      return $http.jsonp(url).then(function(response){
        return response.data.list.resources[0].resource.fields.name;
      });
    }

    this.getExchange = function(symbol){
      var url = this.echoExchange(symbol);

      return $http.jsonp(url).then(function(response){
        return response.data[0].e;
      })
    }
  });
