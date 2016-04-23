angular.module('EduMedApp.tratamientos', [])

	.controller('tratamientosCtrl',['$scope','Tratamientos','Estudios', function($scope, Tratamientos, Estudios) {
		'use strict';
		console.log('tratamientos');
		$scope.setBodyClass('tratamientos');
		
		$scope.tratamientos = Tratamientos.all();
		$scope.estudios = Estudios.all();
 		


	






	}]);






