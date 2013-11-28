'use strict';

describe('Directive: metaTable', function () {

  // load the directive's module
  beforeEach(module('metaUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<meta-table></meta-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the metaTable directive');
  }));
});
