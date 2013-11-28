'use strict';

angular.module('metaUiApp')
    .controller('PersonsCtrl', ['$scope', 'Entity', '$log', function ($scope, Entity, $log) {
        $scope.entityName = "persons"
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
