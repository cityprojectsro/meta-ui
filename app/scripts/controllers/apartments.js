'use strict';


angular.module('metaUiApp')
  .controller('ApartmentsCtrl', ['$scope', 'Entity', '$log', function ($scope, Entity, $log) {
        $scope.entityName = "apartments"
        Entity.getMeta({entity: $scope.entityName},
            function(data) {
                $scope.meta = data;

                Entity.getAll({entity: $scope.entityName},
                    function(data) {
                        $scope.entity = data;
                    }
                );
            }
        );

    }]);