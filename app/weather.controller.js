
(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['CityFactory', 'toastr'];

    /* @ngInject */
    function WeatherController(CityFactory,toastr) {
        var vm = this;
        vm.city="";
        activate();
/*
        function activate() {
          if(response.status ==200) {
          CityFactory.getLocations().then(function(response)
         vm.city=response.data;
          toastr.success("City Found Successfully");
          return response
        } else {
          toastr.error("Error Searchng for City")
        }
        */
    }
})();
