(function () {
    'use strict';

    angular.module('rental')
        .controller('SearchCtrl', function ($scope, HotwireClient) {

            $scope.uiState = 'search';
            $scope.searchParams = {};

            $scope.search = function () {
                $scope.uiState = 'loading';

                HotwireClient.getCarsWithFilters(
                    $scope.searchParams.startDate, $scope.searchParams.endDate, $scope.searchParams.location)
                    .then(function (cars) {
                        console.log(cars);
                        if (cars !== undefined && cars.length > 0) {
                            console.log(cars);
                            $scope.cars = cars;
                            $scope.uiState = 'results';
                        }
                        else {
                            $scope.uiState = 'error';
                        }

                    }, function (error) {
                        $scope.uiState = 'error';
                    });

            };

            $scope.searchView = function () {
                $scope.uiState = 'search';
            }


        });

})();
