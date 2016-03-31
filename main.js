angular.module('angularCalculatorApp', [])
    .controller('MainController', function($scope) {
        $scope.hidden = 'hidden';
        $scope.onClickSum = function() {
            $scope.result = calculateSum();
            function calculateSum() {
                if ($scope.op1 == '' || $scope.op1 == undefined ||
                    $scope.op2 == '' || $scope.op2 == undefined) {
                    alert('Both operands are required!')
                } else {
                    var o1 = $scope.op1;
                    var o2 = $scope.op2;
                    $scope.hidden = 'visible';
                    $scope.operation = 'adding';
                    $scope.ope1 = $scope.op1;
                    $scope.ope2 = $scope.op2;
                    return o1 + o2;
                }
            }
            $scope.op1 = '';
            $scope.op2 = '';

        };
        $scope.onClickSubtract = function() {
            $scope.result = calculateSub();
            function calculateSub() {
                if ($scope.op1 == '' || $scope.op1 == undefined ||
                    $scope.op2 == '' || $scope.op2 == undefined) {
                    alert('Both operands are required!')
                } else {
                    var o1 = $scope.op1;
                    var o2 = $scope.op2;
                    $scope.hidden = 'visible';
                    $scope.operation = 'subtracting';
                    $scope.ope1 = $scope.op1;
                    $scope.ope2 = $scope.op2;
                    return o1 - o2;
                }
            }
            $scope.op1 = '';
            $scope.op2 = '';

        };
        $scope.onClickMultiply = function() {
            $scope.result = calculateMul();
            function calculateMul() {
                 if ($scope.op1 == '' || $scope.op1 == undefined ||
                    $scope.op2 == '' || $scope.op2 == undefined) {
                    alert('Both operands are required!')
                } else {
                    var o1 = $scope.op1;
                    var o2 = $scope.op2;
                    $scope.hidden = 'visible';
                    $scope.operation = 'multiplying';
                    $scope.ope1 = $scope.op1;
                    $scope.ope2 = $scope.op2;
                    return o1 * o2;
                }
            }
            $scope.op1 = '';
            $scope.op2 = '';

        };
        $scope.onClickDivide = function() {
            $scope.result = calculateDiv();
            function calculateDiv() {
                if ($scope.op1 == '' || $scope.op1 == undefined ||
                    $scope.op2 == '' || $scope.op2 == undefined) {
                    alert('Both operands are required!');
                } else if($scope.op2== 0){
                     alert('You cannot divide by 0!');
                } else{
                    var o1 = $scope.op1;
                    var o2 = $scope.op2;
                    $scope.hidden = 'visible';
                    $scope.operation = 'dividing';
                    $scope.ope1 = $scope.op1;
                    $scope.ope2 = $scope.op2;
                    return o1 / o2;
                }
            }
            $scope.op1 = '';
            $scope.op2 = '';

        };

    });