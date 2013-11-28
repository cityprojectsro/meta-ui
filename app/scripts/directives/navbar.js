'use strict';

angular.module('metaUiApp')
  .directive('navbar', [function () {
    return {
        templateUrl: 'views/navbar.html',
        restrict: "AE"
    };
  }]);
