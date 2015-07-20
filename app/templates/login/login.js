'use strict';

angular.module('smartBeach.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'templates/login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', '$location', '$toolbar', function($scope, $location, $toolbar) {
	$scope.login = function() {
		$location.path("/seleccion-sector")
	};

	$toolbar.setTitle("Entrada de usuarios");
	$toolbar.setIcon("menu");
}]);