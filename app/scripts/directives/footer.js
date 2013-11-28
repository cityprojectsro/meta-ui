'use strict';

angular.module('metaUiApp')
  .directive('footer', [function () {
    return {
      templateUrl: "views/footer.html",
      restrict: 'AE'
    };
  }]);
