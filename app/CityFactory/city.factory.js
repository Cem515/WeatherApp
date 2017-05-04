
(function () {
    'use strict';

    angular
        .module('app',['toastr'])
        .factory('CityFactory', CityFactory)

    CityFactory.$inject = ['$http'];

    function CityFactory($http) {
        var service = {
            citySearch: citySearch,

        };

        return service;

        function citySearch(city) {

            return $http({
                method: "GET",
                URL: 'api.openweathermap.org/data/2.5/weather?q=',
                params: {
                    appID: '781d827c6be36936f22443be9b8de70e',
                    q = "" + city + "",
                    units: 'imperial'
                }
            }).then(function (response) {

                return response;

            }, function (error) {

                return error
                
            })
        }
    }
})();