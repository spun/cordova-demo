'use strict';

angular.module('smartBeach.reubicacion', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reubicacion', {
    templateUrl: 'templates/reubicacion/reubicacion.html',
    controller: 'ReubicacionCtrl'
  });
}])

.controller('ReubicacionCtrl', ['$toolbar', function($toolbar) {
	$toolbar.setTitle("Reubicar");
	$toolbar.setIcon("arrow");
}]);