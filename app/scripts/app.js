'use strict';

angular.module('metaUiApp', ['ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/persons', {
                templateUrl: 'views/persons.html',
                controller: 'PersonsCtrl'
            })
            .when('/apartments', {
              templateUrl: 'views/apartments.html',
              controller: 'ApartmentsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
