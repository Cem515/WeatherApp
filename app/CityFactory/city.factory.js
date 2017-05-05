
(function () {
    'use strict';

    angular
        .module('app')
        .factory('CityFactory', CityFactory);

    CityFactory.$inject = ['$http','$q'];

    function CityFactory($http,$q) {
        
        var service = {
            citySearch: citySearch,

        };

        return service;

        function citySearch(city) {

            var defer=$q.defer();

            return $http.get('api.openweathermap.org/data/2.5/weather?'+city+'&APPID=f5e578ae3ee7eb6403dd38660295e558')

            .then(function (response) {

               defer.resolve(response);

            }, function (error) {

                defer.reject(error);
                
            })

        }
    }
})();