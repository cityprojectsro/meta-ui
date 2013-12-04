'use strict';

angular.module('metaUiApp')
  .directive('metaForm', [function () {
    return {
      templateUrl: 'views/metaForm.html',
      restrict: 'AE'
    };
  }]);
