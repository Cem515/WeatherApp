(function() {
    'use strict';

    angular
        .module('app', []);
})();

(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = [];

    /* @ngInject */
    function WeatherController() {
        var vm = this;

        activate();

        function activate() {


        }
    }
})();
