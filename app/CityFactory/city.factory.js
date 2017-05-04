
(function () {
    'use strict';

    angular
        .module('app')
        .factory('CityFactory', CityFactory);

    CityFactory.$inject = ['$http','$q'];

    function CityFactory($http,$q) {
        let city = weatherCtrl.citySelect;
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
                    appID: '781d827c6be36936f22443be9b8de70e',
                    q = "" + city + "",
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