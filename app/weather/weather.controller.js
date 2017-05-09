(function () {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['CityFactory', 'toastr'];

    function WeatherController(CityFactory) {
        /* jshint validthis:true */
        var weatherCtrl = this;
        weatherCtrl.title = 'CityFactory';
        weatherCtrl.citySelect = "";
        weatherCtrl.CitiesSeached = [];
        let citySelect = weatherCtrl.citySelect;

        weatherCtrl.citySearch = function (citySelect) {
            CityFactory
                .citySearch(citySelect)
                .then(function (data) {
                    weatherCtrl.results = data;
                    weatherCtrl.weather = {
                        Name: weatherCtrl.results.name,
                        Temperature: weatherCtrl.results.main.temp,
                        Humidity: weatherCtrl.results.main.humidity,
                        HighTemp: weatherCtrl.results.main.temp_max,
                        LowTemp: weatherCtrl.results.main.temp_min,
                        Pressure: weatherCtrl.results.main.pressure,
                        WindSpeed: weatherCtrl.results.wind.speed,
                    }
                });
            CityFactory
                .citySearch(citySelect)
                .then(function (data) {
                    weatherCtrl.results = data
                    weatherCtrl.CitiesSeached.push(
                        weatherCtrl.results.name
                    )

                    CityFactory
                        .getCity()
                        .then(function (response) {
                            if (response.status == 200) {
                                toastr.success("City Found");
                            } else {
                                toastr.error("City Not Found");
                            }
                        })

                });
        }

        weatherCtrl.first = function () {
            weatherCtrl.citySearch(weatherCtrl.CitiesSeached[weatherCtrl.CitiesSeached.length - 2])

        };

        weatherCtrl.second = function () {
            weatherCtrl.citySearch(weatherCtrl.CitiesSeached[weatherCtrl.CitiesSeached.length - 3])

        };

        weatherCtrl.third = function () {
            weatherCtrl.citySearch(weatherCtrl.CitiesSeached[weatherCtrl.CitiesSeached.length - 4])

        };



    }
})();