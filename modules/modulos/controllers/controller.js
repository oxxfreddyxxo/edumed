angular.module('EduMedApp.modulos', [])

	.controller('modulosCtrl',['$scope','$sce','ngDialog', function($scope,$sce,ngDialog) {
		$scope.setBodyClass('modulos');
	  	//'use strict';
	  	console.log($sce);
		//Fin Modal selección empresa
		
		$scope.API = null;
		$scope.onPlayerReady = function(API) {
			console.log(API);
			$scope.API = API;
		};
 

		$scope.config = {
			
            preload: "none",
            sources: [
                {src: $sce.trustAsResourceUrl("video/La_artritis_psoriasica.mp4"), type: "video/mp4"}
            ],
            theme: {
                url: "lib/videogular-themes-default/videogular.css"
            },
            plugins: {
         		poster: "video/La_artritis_psoriasica.jpg"
            }
           
		};	
		

		$scope.onCompleteVideo = function() {
			console.log("on complete 1");

			ngDialog.open({ 
				template: 'modules/modulos/templates/modal.html',
				className: '',
				controller: ['$scope', function($scope) { 
					// Controller logic here
					
					console.log('alla');
					$scope.clickToClose = function() {
						console.log('jojo');
						$scope.closeThisDialog(0);
						//$location.path('/calendario');
						//Moment.addMoment( { fecha: diaSelect.toISOString(), tipo: 'estudio' } );
					};

				}]
			});
		};


		$scope.testRun = false;
		$scope.starTest = function() {
			$scope.testRun = true;
			$scope.API.stop();
		}
		$scope.okTest = function() {
			$scope.testRun = false;
		}
		


	






}]);






