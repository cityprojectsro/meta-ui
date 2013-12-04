'use strict';

angular.module('metaUiApp')
  .directive('metaTable', [function () {
    return {
      templateUrl: "views/metaTable.html",
      restrict: 'AE'
    };
  }]);
