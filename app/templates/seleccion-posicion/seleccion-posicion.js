'use strict';

angular.module('smartBeach.seleccionPosicion', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/seleccion-posicion', {
    templateUrl: 'templates/seleccion-posicion/seleccion-posicion.html',
    controller: 'SeleccionPosicionCtrl'
  });
}])

.controller('SeleccionPosicionCtrl', ['$scope', '$location', '$toolbar', function($scope, $location, $toolbar) {
	
	$scope.selectPosition = function(status) {

		if( status === 'empty') {
			$location.path("/seleccion-casilla-vacia")
		}
		else if( status === 'occupied') {
			$location.path("/seleccion-casilla-ticket")
		}
		
	};

	$toolbar.setTitle("Plano zona");
	$toolbar.setIcon("menu");

}]);