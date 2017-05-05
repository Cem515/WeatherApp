
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

             $http({
                method: "GET",
                URL: 'api.openweathermap.org/data/2.5/weather?q=',
                params: {
                    appID: 'f5e578ae3ee7eb6403dd38660295e558',
                    q:""+city+"",
                    units: 'imperial'
                }
            }).then(function (response) {

               defer.resolve(response);

            }, function (error) {

                defer.reject(error);
                
            })

            return defer.promise;
        }
    }
})();