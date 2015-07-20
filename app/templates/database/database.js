'use strict';

angular.module('smartBeach.database', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/database', {
    templateUrl: 'templates/database/database.html',
    controller: 'DatabaseCtrl'
  });
}])

.controller('DatabaseCtrl', ['$scope', 'DBService', '$toolbar', '$mdToast', '$location', function($scope, DBService, $toolbar, $mdToast, $location) {
	$toolbar.setTitle("Database");
	$toolbar.setIcon("arrow");
	$scope.resetDB = function() {
		DBService.reset();
		$mdToast.show($mdToast.simple().content('Base de datos reseteada'));
		$location.path('/');
	};
}]);