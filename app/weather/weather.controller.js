(function () {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['CityFactory', 'toastr'];

    function WeatherController(CityFactory, toastr) {

        var weatherCtrl = this;
        weatherCtrl.title = 'CityFactory';
        weatherCtrl.citySelect = "";
        weatherCtrl.CitiesSeached = [];
        let citySelect = weatherCtrl.citySelect;

        function currentWeather(weather) {
            weatherCtrl.weather = {
                Name: weather.name,
                Temperature: weather.main.temp,
                Humidity: weather.main.humidity,
                HighTemp: weather.main.temp_max,
                LowTemp: weather.main.temp_min,
                Pressure: weather.main.pressure,
                WindSpeed: weather.wind.speed,
            }
            weatherCtrl.CitiesSeached.push(
                weather.name
            )
        }

        weatherCtrl.citySearch = function (citySelect) {
            CityFactory
                .citySearch(citySelect)
                .then(function (data) {
                    let weather = data
                    currentWeather(data);

                });

            CityFactory
                .citySearch(citySelect)
                .then(function (response) {

                    if (response.status == 200) {
                        toastr.success("City Found");
                    } else {
                        toastr.error("City Not Found");
                    }
                }, function (error) {
                    toastr.error("Error: " + error.status.text);

                })

        };

    }
})();