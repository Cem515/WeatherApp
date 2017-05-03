(function() {
    'use strict';

    angular
        .module('app')
        .factory('CityFactory', CityFactory);

    CityFactory.$inject = ['$http','$q'];

    /* @ngInject */
    function CityFactory($http, $q) {
      /*  var service = {
          getCity= getCity()
        };*/

        return service;

        function getCity() {

          var defer=$q.defer();

         $http({
            method:"GET"
            url:"https://api.openweathermap.org/data"
            params:{
              appid:'781d827c6be36936f22443be9b8de70e',
              q:""+city+"",
              units:'imperial'
            }
          }).then(function(response){

            defer.resolve(response);

          }, function(error){

            defer.reject(response);

        })
        }

        function(error){
defer.reject(error);

        });

        return defer.promise

    }
})();
