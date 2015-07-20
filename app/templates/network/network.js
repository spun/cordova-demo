'use strict';

angular.module('smartBeach.network', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/network', {
    templateUrl: 'templates/network/network.html',
    controller: 'NetworkCtrl'
  });
}])

.controller('NetworkCtrl', ['$scope', '$toolbar', function($scope, $toolbar) {
	$toolbar.setTitle("Network");
    $toolbar.setIcon("arrow");

	$scope.status = "-";
    $scope.type = navigator.connection.type;

    if($scope.type == "none") {
        $scope.status = 'No conectado';
    }
    else {
        
        $scope.status = 'Conectado';
    }

	document.addEventListener("online", function() {
        console.log("Online");
        $scope.status = 'Conectado';
        
        $scope.type = navigator.connection.type;
        $scope.$apply();
    } , false);

    // Offline event
    document.addEventListener("offline", function() {
        console.log("Offline");
        $scope.status = 'No conectado';
        $scope.type = navigator.connection.type;
        $scope.$apply();
    } , false);
}]);