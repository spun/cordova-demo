/*global angular: false, cordova: false, console: false*/
/*jslint browser: true */

/**
 * @ngdoc function
 * @name siApp.controller:MycontrollersCtrl
 * @description
 * # MycontrollersCtrl
 * Controller of the siApp
 */

var myControllers = angular.module('smartBeach.main', []);

myControllers.controller('MainCtrl', ['$scope', '$mdSidenav', '$location', function ($scope, $mdSidenav, $location) {
    'use strict';

    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };

    $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
    };

    $scope.sidenavSelection = function(selected) {
        var urlSelection = '/';

        if(selected === 'sector') {
            urlSelection = '/seleccion-sector';
        } else if (selected === 'posicion') {
            urlSelection = '/seleccion-posicion';
        } else if (selected === 'login') {
            urlSelection = '/login';
        } else if (selected === 'database') {
            urlSelection = '/database';
        } else if (selected === 'network') {
            urlSelection = '/network';
        }

        $location.path(urlSelection);
        $mdSidenav('left').close();
    };


    console.log(window.cordova);

    document.addEventListener('deviceready', function onOnline() {


        if(cordova.platformId !== 'browser') {
            console.log('Ready');
            // Online event
            document.addEventListener('online', function() {
                console.log('Online');
            }, false);

            // Offline event
            document.addEventListener('offline', function() {
                console.log('Offline');
            }, false);
        }

    }, false);

}]);
