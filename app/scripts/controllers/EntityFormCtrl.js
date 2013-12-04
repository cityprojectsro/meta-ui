'use strict';


angular.module('metaUiApp')
    .controller('EntityFormCtrl', ['$scope', '$routeParams', 'Entity', function ($scope, $routeParams, Entity) {
        var entityName = $routeParams.entity;
        var id = $routeParams.id;

        Entity.getMeta({entity: entityName},
            function(meta) {
                $scope.meta = meta;
                Entity.get({id: id, entity: entityName},
                    function(entity) {
                        $scope.entity = entity;
                    }
                )
            }
        )
    }]);
