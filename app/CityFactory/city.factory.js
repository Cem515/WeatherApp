(function () {
        'use strict';

        angular
            .module('app')
            .factory('CityFactory', CityFactory);

        CityFactory.$inject = ['$http'];
       
        function CityFactory($http) {
  
            var service = {
                citySearch: citySearch,

            };

            return service;

            function citySearch(term) {

                return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + term + '&units=imperial&apikey=f5e578ae3ee7eb6403dd38660295e558')
                    .then(function (response) {
                            return response.data
                        });

            }
    }
})();