'use strict';

describe('Controller: Test3Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularWakandaFrontApp'));

  var Test3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Test3Ctrl = $controller('Test3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
