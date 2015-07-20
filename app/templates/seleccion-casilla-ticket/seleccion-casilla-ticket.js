'use strict';

angular.module('smartBeach.seleccionCasillaTicket', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/seleccion-casilla-ticket', {
    templateUrl: 'templates/seleccion-casilla-ticket/seleccion-casilla-ticket.html',
    controller: 'SeleccionCasillaTicketCtrl'
  });
}])

.controller('SeleccionCasillaTicketCtrl', ['$scope', '$location', '$toolbar', function($scope, $location, $toolbar) {
	
	$scope.imprimir = function() {
		$location.path("/impresion");	
	};

	$scope.reubicar = function() {
		$location.path("/reubicar");	
	};

	$scope.liberar = function() {
		$location.path("/liberar");	
	};

	$scope.anular = function() {
		$location.path("/anular");	
	};

	$scope.incidencia = function() {
		$location.path("/incidencia");	
	};

	$toolbar.setTitle("Informacion sección");
	$toolbar.setIcon("arrow");

}]);