'use strict';

angular.module('smartBeach.seleccionSector', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/seleccion-sector', {
    templateUrl: 'templates/seleccion-sector/seleccion-sector.html',
    controller: 'SeleccionSectorCtrl'
  });
}])

.controller('SeleccionSectorCtrl', ['$scope', '$location', '$toolbar', function($scope, $location, $toolbar) {
	$scope.selectZone = function() {
		$location.path("/seleccion-posicion")
	};


	$toolbar.setTitle("Zonas");
	$toolbar.setIcon("menu");
}]);