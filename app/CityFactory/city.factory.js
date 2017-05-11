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
//Request for Weather Data
            $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/weather',
                    params: {
                        q: '"' + term + '"',
                        units: 'imperial',
                        apikey: 'f5e578ae3ee7eb6403dd38660295e558'
                    }
                })
//Toastr Errors
                .then(function (response) {
                    defer.resolve(response);
                }, function (error) {
                   defer.reject (error);
                })
                return defer.promise;
        }
        
    }
})();