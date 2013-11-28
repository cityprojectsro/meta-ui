'use strict';

angular.module('metaUiApp')
    .factory('Entity', ["$resource", function($resource) {
        return $resource('/api/:entity/:id', {}, {
            getAll:  {method: "GET", params: {id:'all'}, isArray:true},
            getMeta: {method: "GET", params: {id:'meta'}},
            save:    {method: "PUT", params: {id: '@id', entity: '@entityName'}},
            create:  {method: "POST", params: {entity: '@entityName'}},
            delete:  {method: "DELETE", params: {id: "@id"}}
        });
    }]);
