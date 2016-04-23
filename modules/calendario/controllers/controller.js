angular.module('EduMedApp.calendario', [])

	.controller('calendarioCtrl',['$scope','Moment', function($scope, Moment) {
		console.log('calendarioCtrl');
		$scope.setBodyClass('calendario');
  	//'use strict';
  	console.log(Moment.moments);
	//Fin Modal selección empresa

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
 
   //

	






	}]);






