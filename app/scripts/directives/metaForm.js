'use strict';

angular.module('metaUiApp')
    .directive('metaForm', ["Entity", "$routeParams", "$location", function (Entity, $routeParams, $location) {
        return {
            templateUrl: 'views/metaForm.html',
            restrict: 'AE',
            link: function(scope) {
                var entityName= $routeParams.entity
                scope.entity = {};

                Entity.getMeta({entity: entityName},
                    function(meta) {
                        scope.meta = meta;
                    }
                );

                scope.save = function() {
                    scope.entity.entityName = entityName;
                    Entity.save(scope.entity,
                        function() {
                            console.log("Entity Saved");
                            $location.path($routeParams.entity);
                        }
                    )
                }

                scope.delete = function() {
                    Entity.delete({id: scope.entity.id, entity: entityName},
                        function onSuccess() {
                            console.log("deleted entity!")
                            $location.path($routeParams.entity);
                        }
                    );
                }
            }
        };
    }]);
