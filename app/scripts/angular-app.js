/*global angular: false*/

angular.module('smartBeach', [
	'ngRoute',
	'smartBeach.db',
	'smartBeach.main',
	'smartBeach.login',
	'smartBeach.creacionVenta',
	'smartBeach.impresion',
	'smartBeach.incidencia',
	'smartBeach.reubicacion',
	'smartBeach.seleccionCasillaTicket',
	'smartBeach.seleccionCasillaVacia',
	'smartBeach.seleccionPosicion',
	'smartBeach.seleccionSector',
	'smartBeach.toolbar',
	'smartBeach.database',
	'smartBeach.network',
	'ngMaterial'
	])

.run(['DBService', function (DBService) {
	'use strict';

	document.addEventListener('deviceready', function() {
		DBService.init().then(function() {
			console.log('BD ON');
			navigator.splashscreen.hide();
		});
	});
}])

.config(['$routeProvider', function($routeProvider) {
	'use strict';
	$routeProvider.otherwise({redirectTo: '/login'});
}]);

