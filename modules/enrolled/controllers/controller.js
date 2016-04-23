angular.module('EduMedApp.enrolled', [])

	.controller('enrolledCtrl',['$scope','Moment', function($scope, Moment) {
		'use strict';
		console.log('enrolled');
		$scope.setBodyClass('enrolled');
 		
  		console.log(Moment.moments);
		

		$scope.day = moment();
		$scope.controles = Moment.moments;
	

		$scope.saveFecha = function(fecha) {
			//var fechaExamen = moment(fecha);
			//console.log(fecha);
		}


		$scope.$on( 'moments.update', function( event ) {
		$scope.moments = Moment.moments;


    
		$scope.moments = Moment.moments;
		console.log(Moment.moments);
   });

	






	}]);






