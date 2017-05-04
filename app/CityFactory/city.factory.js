(function () {
    'use strict';

    angular
        .module('app')
        .factory('CityFactory', CityFactory)

    CityFactory.$inject = ['$http'];

    function CityFactory($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() {}
    }
})();