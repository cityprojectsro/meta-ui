'use strict';

angular.module('metaUiApp')
    .controller('EntityFormCtrl', ['$scope', '$routeParams', 'Entity', function ($scope, $routeParams, Entity) {
        $scope.entityName = $routeParams.entity;
        var id = $routeParams.id;

        Entity.get({id: id, entity: $scope.entityName},
            function(entity) {
                $scope.entity = entity;
            }
        )
    }]);
