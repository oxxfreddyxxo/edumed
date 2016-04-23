angular.module('EduMedApp.pacientes', [])

	.controller('pacientesCtrl',['$scope','Pacientes', function($scope, Pacientes) {
		'use strict';
		console.log('pacientes');
		$scope.setBodyClass('pacientes');
		$scope.pacientes = Pacientes.all();
 		


	






	}]);






