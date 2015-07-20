'use strict';

angular.module('smartBeach.incidencia', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/incidencia', {
    templateUrl: 'templates/incidencia/incidencia.html',
    controller: 'IncidenciaCtrl'
  });
}])

.controller('IncidenciaCtrl', ['$scope', '$mdBottomSheet', '$toolbar', function($scope, $mdBottomSheet, $toolbar) {


	$scope.showListBottomSheet = function($event) {
		$scope.alert = '';
		$mdBottomSheet.show({
			templateUrl: 'templates/incidencia/bottom-sheet-list-template.html',
			controller: 'IncidenciaCtrl',
			targetEvent: $event
		});
	};

	$scope.listadoIncidencias = [{descripcion: "No cobrado"}, {descripcion: "Rotura"}];
	$scope.addIncidencia = function() {
		$mdBottomSheet.hide();
	};

	$toolbar.setTitle("Incidencias sección");
	$toolbar.setIcon("arrow");
}]);