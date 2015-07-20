'use strict';

angular.module('smartBeach.creacionVenta', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/creacion-venta', {
    templateUrl: 'templates/creacion-venta/creacion-venta.html',
    controller: 'CreacionVentaCtrl'
  });
}])

.controller('CreacionVentaCtrl', [function() {
	$toolbar.setIcon("menu");
}]);