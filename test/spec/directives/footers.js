'use strict';

describe('Directive: footers', function () {

  // load the directive's module
  beforeEach(module('metaUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<footers></footers>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the footers directive');
  }));
});
