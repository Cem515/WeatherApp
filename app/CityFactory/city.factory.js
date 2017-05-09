(function () {
    'use strict';

    angular
        .module('app')
        .factory('CityFactory', CityFactory);

    CityFactory.$inject = ['$http', '$q'];

    function CityFactory($http, $q) {

        var service = {
            citySearch: citySearch,

        };

        return service;

        function citySearch(term) {

            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/weather',
                    params: {
                        q: '"' + term + '"',
                        units: 'imperial',
                        apikey: 'f5e578ae3ee7eb6403dd38660295e558'
                    }
                })
                .then(function (response) {
                        if (typeof response === 'object') {
                            defer.resolve(response);
                        } else {
                            defer.reject(response);

                        }
                    },
                    function (error) {
                        defer.reject(error);
                    });
            return defer.promise
        }
    }
})();