'use strict';

describe('Service: Stock', function () {

  // load the service's module
  beforeEach(module('ExpanderApp'));

  // instantiate service
  var Stock;
  beforeEach(inject(function (_Stock_) {
    Stock = _Stock_;
  }));

  it('should do something', function () {
    //expect(!!Stock).toBe(true);
  });

});
