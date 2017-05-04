(function () {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['CityFactory','toastr'];

    function WeatherController(CityFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CityFactory';
        weatherCtrl.citySelect="";
        vm.citySelect = citySelect;

        weatherCtrl.citySearch = function(citySelect){
            CityFactory
                .citySearch(weatherCtrl.citySelect)
                .then(function(data) {
                    vm.results= data;
                    console.log(data);
                })
        }

       function activate() {

            CityFactory.getCity().then(function (response) {
                if (response.status == 200) {
                    toastr.success("City Found");
                } else {
                    toastr.error("City Not Found");
                }
            })

       }
    }
})();