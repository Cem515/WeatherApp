(function () {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['CityFactory','toastr'];

    function WeatherController(CityFactory) {
        /* jshint validthis:true */
        var weatherCtrl = this;
        weatherCtrl.title = 'CityFactory';
        weatherCtrl.citySelect="";
        let citySelect = weatherCtrl.citySelect;

        weatherCtrl.citySearch = function(citySelect){
            CityFactory
                .citySearch(weatherCtrl.citySelect)
                .then(function(data) {
                    weatherCtrl.results= data;
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