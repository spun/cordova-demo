'use strict';

angular.module('smartBeach.seleccionCasillaVacia', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/seleccion-casilla-vacia', {
    templateUrl: 'templates/seleccion-casilla-vacia/seleccion-casilla-vacia.html',
    controller: 'SeleccionCasillaVaciaCtrl'
  });
}])

.controller('SeleccionCasillaVaciaCtrl', ['$scope', 'Articulos', '$mdDialog', '$mdToast', '$toolbar', '$location', function($scope, Articulos, $mdDialog, $mdToast, $toolbar, $location) {
	$scope.cobrar = function(ev) {

		var confirm = $mdDialog.confirm()
						.title('Generar ticket')
						.content('¿Está seguro de generar el ticket?')
						.ariaLabel('Generar ticket')
						.ok('Generar')
						.cancel('Cancelar')
						.targetEvent(ev);

		$mdDialog.show(confirm).then(function() {
			$mdToast.show($mdToast.simple().content('Imprimiendo ticket'));
			$location.path('/seleccion-posicion');
		});
  	}

  	$toolbar.setTitle("Asignar sección");
  	$toolbar.setIcon("arrow");

	$scope.precioTotal = 0;
$scope.cantidadTotal = 0;
	$scope.articulos = [];

	$scope.add = function(articulo) {
		console.log(articulo);
		articulo.cantidad++;
		$scope.setTotal();
	};

	$scope.remove = function(articulo) {
		if(articulo.cantidad > 0) {
			articulo.cantidad--;
			$scope.setTotal();
		}
	};

	$scope.setTotal = function() {
		var precioTotal = 0, cantidad = 0, numArticulos = $scope.articulos.length;

		for (var i = 0; i < numArticulos; i++) {
			cantidad += $scope.articulos[i].cantidad;
			precioTotal += $scope.articulos[i].cantidad *  $scope.articulos[i].PRECIO;
		}

		$scope.cantidadTotal = cantidad;
		$scope.precioTotal = precioTotal;

	};

  	Articulos.all().then(function(articulos){
  		var articulos = articulos
        $scope.articulos = articulos;

        var numArticulos = articulos.length;
        for (var i = 0; i < numArticulos; i++) {
        	articulos[i].cantidad = 0;        	
        }

        $scope.articulos = articulos;


    });
}]);