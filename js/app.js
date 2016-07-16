(function () {

    var app = angular.module('rental', [
        'ngMaterial',
        'ngMessages',
        'ngRoute',
        'mdPickers'
    ]);

    app.constant('API_KEY', 'its secret!')
        .constant('API_URL', 'http://api.hotwire.com/v1/search/car');


    app.config(['$httpProvider', '$routeProvider',
        function ($httpProvider, $routeProvider) {

            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.withCredentials = true;
            delete $httpProvider.defaults.headers.common["X-Requested-With"];
            $httpProvider.defaults.headers.common["Accept"] = "application/json";
            $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

            // Routes
            $routeProvider.when('/', {
                templateUrl: 'views/searchView.html'
            }).when('/detail/:id', {
                templateUrl: 'views/detailView.html'
            }).otherwise({
                redirectTo: '/'
            });
        }

    ]);

    app.config(function ($mdThemingProvider) {

        $mdThemingProvider.definePalette('white', {
            '50': '#fff',
            '100': '#fff',
            '200': '#fff',
            '300': '#fff',
            '400': '#fff',
            '500': '#fff',
            '600': '#fff',
            '700': '#fff',
            '800': '#fff',
            '900': '#fff',
            'A100': '#fff',
            'A200': '#fff',
            'A400': '#fff',
            'A700': '#fff',
            'contrastDefaultColor': 'light',

            'contrastDarkColors': ['50', '100',
                '200', '300', '400', 'A100'],
            'contrastLightColors': undefined
        });

        $mdThemingProvider.theme('panelTheme')
            .primaryPalette('white')
            .backgroundPalette('white')
            .dark();

    });


})();