'use strict';

describe('Service: Stock', function () {

  // load the service's module
  beforeEach(module('getStockApp'));

  // instantiate service
  var Stock, mockBackend;

  beforeEach(inject(function (_$httpBackend_, _Stock_) {
    mockBackend = _$httpBackend_;
    Stock = _Stock_;
  }));

  describe ("queries should return an object", function(){
      it('should do something', function () {
        var api = 'http://echo.jsontest.com/value/goog?callback=JSON_CALLBACK', results;

        mockBackend.expectJSONP(api).respond({
          value: "goog"
        });

        Stock.echoTicker("goog").then(function(response){
          results = response;
        })

        mockBackend.flush();
        expect(results).toEqual("goog");
      });

      it ("should do one more test", function(){

         mockBackend.expectJSONP("http://echo.jsontest.com/value/goog?callback=JSON_CALLBACK").respond({value: 'goog'});

        var promise = Stock.echoTicker("goog"), results;

        promise.then(function(response){
          results = response;
        });

        mockBackend.flush();

        expect(results).toEqual("goog");
      })

  })
});
