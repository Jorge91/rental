(function () {
    'use strict';

    angular.module('rental')
        .service('HotwireClient', function ($http, $q, $filter, API_KEY, API_URL) {

            function getCarsWithFilters(dateFrom, dateTo, location) {
                var defer = $q.defer();
                var url = API_URL
                    + '?apikey=' + API_KEY
                    + '&format=jsonp'
                    + '&callback=JSON_CALLBACK'
                    + '&startdate=' + $filter('date')(dateFrom, 'MM/dd/yyyy')
                    + '&enddate=' + $filter('date')(dateTo, 'MM/dd/yyyy')
                    + '&pickuptime=' + $filter('date')(dateFrom, 'HH:mm')
                    + '&dropofftime=' + $filter('date')(dateTo, 'HH:mm');

                if (location != "" && location != null) {
                    url += '&dest=' + location;
                }

                $http.jsonp(url).success(function (cars) {
                    defer.resolve(cars['Result']);
                })
                    .error(function (error) {
                        defer.reject(error);
                    });

                return defer.promise;
            }

            return {
                getCarsWithFilters: getCarsWithFilters
            };


        });

})();
