(function () {
    'use strict';
    angular.module('common')
        .directive('uppercase', function () {
            return {
                require: 'ngModel',
                restrict: 'A',
                link: function (scope, elem, attrs, ctrl) {
                    var capitalize = function (inputValue) {
                        if (inputValue == undefined) inputValue = '';
                        var capitalized = inputValue.toUpperCase();
                        if (capitalized !== inputValue) {
                            ctrl.$setViewValue(capitalized);
                            ctrl.$render();
                        }
                        return capitalized;
                    }
                    ctrl.$parsers.push(capitalize);
                    capitalize(scope[attrs.ngModel]); // capitalize initial value
                }
            };
        });
})();