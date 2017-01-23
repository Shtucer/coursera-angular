(function () {
    'use strict';
    angular.module('public')
        .controller('SignupController', SignupController)

    SignupController.$inject = ['ProfileService'];
    function SignupController(ProfileService) {
        var signupCtrl = this;
        signupCtrl.success = false;
        signupCtrl.user = {};
        if (ProfileService.isSaved()) {
            var profile = ProfileService.getProfile();
            signupCtrl.user.first_name = profile.first_name;
            signupCtrl.user.last_name = profile.last_name;
            signupCtrl.user.email = profile.email;
            signupCtrl.user.phone = profile.phone;
            signupCtrl.user.favorite = profile.favorite_dish.short_name;
        } else {

        };

        signupCtrl.saveProfile = function () {
            ProfileService.saveProfile(
                signupCtrl.user.first_name,
                signupCtrl.user.last_name,
                signupCtrl.user.email,
                signupCtrl.user.phone,
                signupCtrl.user.favorite
            );
            signupCtrl.success = true;
        };
    };



})();