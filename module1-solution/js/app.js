(function(){
    'use strict';
    angular.module('lunchCheckerApp', [])
        .controller('LunchCheckerController', function($scope){
            $scope.message = '';
            $scope.dishes = '';
            $scope.checkDishes = function(){
                $scope.error = 'ok';
                var arrDishes = $scope.dishes.split(',').map(function(x){return x.trim();});
                arrDishes = arrDishes.filter(function(x){return x.length > 0;});
                var cntDishes = arrDishes.length;
                if(cntDishes==0)
                {
                    $scope.message = 'Please enter data first';
                    $scope.error = "error";
                }else if (cntDishes <= 3) {
                    $scope.message = 'Enjoy!';
                }else {
                    $scope.message = 'Too much!';
                }
            }
        });
})();
