'use strict';

angular.module('metaUiApp')
  .directive('navbar', ["$location", function ($location) {
    return {
        templateUrl: 'views/navbar.html',
        restrict: "AE",
        link: function(scope) {
            scope.isActive = function(viewLocation) {
                return viewLocation === $location.path();
            };
        }
    };
  }]);
