'use strict';

angular.module('metaUiApp')
    .controller('EntityListCtrl', ['$scope', 'Entity', '$routeParams', function ($scope, Entity, $routeParams) {
        $scope.entityName = $routeParams.entity
        Entity.getMeta({entity: $scope.entityName},
            function success(data) {
                $scope.meta = data;

                Entity.getAll({entity: $scope.entityName},
                    function(data) {
                        $scope.entity = data;
                    }
                );
            }
        );

    }]);
