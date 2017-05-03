(function() {
    'use strict';

    angular
        .module('app')
        .factory('CityFactory', CityFactory);

    CityFactory.$inject = ['$http'];

    /* @ngInject */
    function CityFactory($http) {
        var service = {
            getCity: getCity
        };

        return service;

        function getCity() {
          return /*$http({
            method:"GET"
            url:""
          }).then(function(response){

          })*/
        }
    }
})();
