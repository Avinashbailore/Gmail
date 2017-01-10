(function() {
    'use strict';

    angular.module("myApp", ['ngRoute','ngStorage','angularUtils.directives.dirPagination'])
        .config([
            '$routeProvider',
            function($routeProvider){
                $routeProvider
                   .when("/", {
                         templateUrl: "partials/login.html",
                        controller: "loginCtrl"
                    })
                    .when("/authorizationsuccess", {
                        templateUrl: "partials/test.html"
                    })
                    .when("/inbox", {
                        templateUrl: "partials/inbox.html",
                        controller: "inboxCtrl"
                    })
                    .when("/try", {
                        templateUrl: "partials/inbox.html",
                        controller: "inctrl"
                    })
                    .when("/compose", {
                        templateUrl: "partials/inbox.html",
                        controller: "composeCtrl"
                    })
                    .when("/myinboxmsg", {
                        templateUrl: "partials/inbox.html",
                        controller: "inboxCtrl"
                    })
                    .when("/mysentboxmsg", {
                        templateUrl: "partials/inbox.html",
                        controller: "sentboxctrl"
                    })
                    .when("/logout", {
                        templateUrl: "partials/login.html",
                        controller: "loginCtrl"
                    })
                    .when("/thisMessage", {
                        templateUrl: "partials/inbox.html",
                        controller: "myemailsCtrl"
                    })
                    .when("/openMsg", {
                        templateUrl: "partials/inbox.html",
                        controller: "openMsgCtrl"
                    })
                    .when("/openSentMsg", {
                        templateUrl: "partials/inbox.html",
                        controller: "sCtrl"
                    })
                    .when("/Aboutus", {
                        templateUrl: "partials/aboutus.html"
                    })
                    .when("/login", {
                        templateUrl: "partials/login.html",
                        controller: "loginCtrl"
                    })
                    .when("/forwardMsg", {
                        templateUrl: "partials/inbox.html",
                        controller: "forwardCtrl"
                    })




            }
        ]);
})();