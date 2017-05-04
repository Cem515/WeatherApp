(function () {
    'use strict';

    angular.module('app', []);
})();
(function(){
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController)

    WeatherController.$inject = ['$http'];

    function WeatherController($http) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();