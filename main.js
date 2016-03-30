angular.module('angularCalculatorApp', [])
    .controller('MainController', function($scope) {
        $scope.onClickSum = function() {
            $scope.result = calculateSum();
            function calculateSum() {
                return $scope.op1 + $scope.op2;
            }
            $scope.op1 = '';
            $scope.op2 = '';
        };
        $scope.onClickSubtract = function() {
            $scope.result = calculateSub();
            function calculateSub() {
                return $scope.op1 - $scope.op2;
            }
            $scope.op1 = '';
            $scope.op2 = '';
        };
        $scope.onClickMultiply = function() {
            $scope.result = calculateMul();
            function calculateMul() {
                return $scope.op1 * $scope.op2;
            }
            $scope.op1 = '';
            $scope.op2 = '';
        };
        $scope.onClickDivide = function() {
            $scope.result = calculateDiv();
            function calculateDiv() {
                return $scope.op1 / $scope.op2;
            }
            $scope.op1 = '';
            $scope.op2 = '';
        };

    });