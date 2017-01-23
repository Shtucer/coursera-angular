(function () {
    'use strict';
    angular.module('public')
        .controller('InfoController', ['ProfileService', 'MenuService', function (ProfileService, MenuService) {
            var infoCtrl = this;
            infoCtrl.isExists = function () {
                return ProfileService.isSaved();
            };
            infoCtrl.profile = ProfileService.getProfile();
            console.log(infoCtrl.profile);
        }]);
})();