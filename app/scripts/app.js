'use strict';

angular.module('metaUiApp', ['ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/:entity', {
                templateUrl: 'views/entityList.html',
                controller: 'EntityListCtrl'
            })
            .when('/:entity/edit/:id', {
                templateUrl: 'views/entityForm.html',
                controller: 'EntityFormCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
