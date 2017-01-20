(function() {
    'use strict';
    angular.module('Error')
        .component('errorMsg', {
            templateUrl: 'src/error/error.template.html',
            controller: ErrorController
        });

    ErrorController.$inject = ['$rootScope'];

    function ErrorController($rootScope) {
        var $ctrl = this;
        $ctrl.errorMsg = "";
        var cancellers = [];
        $ctrl.$onInit = function() {
            console.log("Error component init");
            cancel = $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams) {
//                    console.log("Start");
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeSuccess',
                                    function(event, toState, toParams, fromState, fromParams) {
                                        $ctrl.errorMsg = "Oh, look! I'm a page with " + toState.name.split(".").length + " views!";
//                    console.log(toState);
                });
            cancellers.push(cancel);
            var cancel = $rootScope.$on('$stateChangeError',
                function(event, toState, toParams, fromState, fromParams, error) {
                    $ctrl.errorMsg = "Error: " + error;
                    console.log("Error: ", error);

                });
            cancellers.push(cancel);
        };
        $ctrl.$onDestroy = function() {
            cancellers.foreach(function(cancel) {
                cancel();
            });
        };
    };
})();
