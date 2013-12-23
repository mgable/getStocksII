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

  describe ("should echo back the ticker symbol", function(){
      it('should echo back the ticker symbol', function () {
        var api = 'http://echo.jsontest.com/value/goog?callback=JSON_CALLBACK', results;

        mockBackend.expectJSONP(api).respond({
          value: "goog"
        });

        Stock.getTicker("goog").then(function(response){
          results = response;
        })

        mockBackend.flush();
        expect(results).toEqual("goog");
      });

      it ("should echo back the ticker symbol take two", function(){

         mockBackend.expectJSONP("http://echo.jsontest.com/value/goog?callback=JSON_CALLBACK").respond({value: 'goog'});

        var promise = Stock.getTicker("goog"), results;

        promise.then(function(response){
          results = response;
        });

        mockBackend.flush();

        expect(results).toEqual("goog");
      });

      it ("should get the name", function (){
        var results;
         mockBackend.expectJSONP("http://finance.yahoo.com/webservice/v1/symbols/goog/quote?format=json&callback=JSON_CALLBACK").respond({list: {resources: [{resource: {fields: {name: "Google, Inc"}}} ] } });

         Stock.getName('goog').then(function(response){
            results = response;
         });

         mockBackend.flush();
         expect(results).toEqual("Google, Inc");

      });

      it ("should get an exchange", function(){
        var results;
        mockBackend.expectJSONP('http://finance.google.com/finance/info?client=ig&callback=JSON_CALLBACK&q=goog').respond([{"e":"NASDAQ"}]);
     
         Stock.getExchange('goog').then(function(response){
            results = response;
         });

         mockBackend.flush();
         expect(results).toEqual("NASDAQ");
      })
  })
});
