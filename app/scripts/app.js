'use strict';

angular.module('metaUiApp', ['ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/:entity', {
                templateUrl: 'views/entity.html',
                controller: 'EntityCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
