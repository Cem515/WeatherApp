(function() {
    'use strict';

    angular
      .module('app')
      .factory('CityFactory', CityFactory);

    CityFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function CityFactory($http, $q) {
      vm.citySelect = '';
      var city = vm.citySelecy

      return service;

      function getCity(city) {

        var defer = $q.defer();

        $http({
          method: "GET",
          url: 'http://api.openweathermap.org/data/2.5/weather?',
          params: {
            appid: '781d827c6be36936f22443be9b8de70e',
            q: "" + city + "",
            units: 'imperial'
          }
        }).then(function(response) {

          defer.resolve(response);

        }, function(error) {

          defer.reject(response);

        })
      }

      function(error) {
        defer.reject(error);

      });

    return defer.promise

  }
})();
