'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('getStockApp'));
  beforeEach(function(){
    this.addMatchers({
      toEqualData:function(expected){
        return angular.equals(this.actual, expected);
      }
    });
  });

  var MainCtrl, Stock, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Stock_) {
    scope = $rootScope.$new();
    Stock = _Stock_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe("initialization" , function(){
    it('should initialize the stock object', function () {
      expect(scope.stock).toEqualData({ticker: "", price: "", exchange: "", name: "", query: ""});
    });

    it ("should get a stock", inject(function($q){

      spyOn(Stock, "getTicker").andCallFake(function(){
        var deferred = $q.defer();
        deferred.resolve("value");
        return deferred.promise;
      })

      spyOn(Stock, "getName").andCallFake(function(){
        var deferred = $q.defer();
        deferred.resolve("some value");
        return deferred.promise;
      })

      spyOn(Stock, "getExchange").andCallFake(function(){
        var deferred = $q.defer();
        deferred.resolve("some other value");
        return deferred.promise;
      })

      scope.getStock();

      scope.$apply();

      expect(scope.stock.name).toEqual("some value");
      expect(scope.stock.ticker).toEqual("value");
      expect(scope.stock.exchange).toEqual("some other value");
    }))
  })
  
});
