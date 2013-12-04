'use strict';

angular.module('metaUiApp')
    .directive('metaForm', ["Entity", "$routeParams", "$location", function (Entity, $routeParams, $location) {
        return {
            templateUrl: 'views/metaForm.html',
            restrict: 'AE',
            link: function(scope) {
                scope.entity = {};

                Entity.getMeta({entity: $routeParams.entity},
                    function(meta) {
                        scope.meta = meta;
                    }
                );

                scope.save = function() {
                    Entity.save(scope.entity,
                        function() {
                            console.log("Entity Saved");
                            $location.path($routeParams.entity);
                        }
                    )
                }
            }
        };
    }]);
