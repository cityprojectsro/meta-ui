'use strict';

describe('Controller: EntityformctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('metaUiApp'));

  var EntityformctrlCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/awesomeThings')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma']);
    scope = $rootScope.$new();
    EntityformctrlCtrl = $controller('EntityformctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings).toBeUndefined();
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(3);
  });
});
