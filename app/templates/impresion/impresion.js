'use strict';

angular.module('smartBeach.impresion', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/impresion', {
    templateUrl: 'templates/impresion/impresion.html',
    controller: 'ImpresionCtrl'
  });
}])

.controller('ImpresionCtrl', ['$toolbar', function($toolbar) {
	$toolbar.setTitle("Impresión");
	$toolbar.setIcon("arrow");
}]);