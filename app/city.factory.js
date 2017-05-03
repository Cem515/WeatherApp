(function() {
    'use strict';

    angular
        .module('app')
        .factory('CityFactory', CityFactory);

    CityFactory.$inject = ['$http'];

    /* @ngInject */
    function CityFactory($http) {
        var service = {
            function: function
        };

        return service;

        function function() {

        }
    }
})();
