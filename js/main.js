//Use to instantiate app, connect factory & controllers and configure app.
var app = angular.module('angularCalculatorApp', ['angularCalculatorApp.controllers', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/calculator', {
            templateUrl: 'views/calculator.html',
            controller: 'PostPageController'
        })
        .otherwise({
            redirectTo: '/calculator'
        });
}]);
