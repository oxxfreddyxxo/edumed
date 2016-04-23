angular.module('EduMedApp.main', [])

	.controller('mainController', function($scope, ngDialog, $location, $rootScope) {
        // create a message to display in our view
       $scope.setBodyClass = function(_bodyCLass) {
            $scope.bodyClass = _bodyCLass;
            //$scope.inLoginPage = ($scope.bodyClass === 'login');
        };
		$rootScope.globalFoo = function() {

			ngDialog.open({ 
				template: 'modules/home/templates/modal.html',
				className: 'ngdialog-theme-default',
				controller: ['$scope', function($scope) { 
					// Controller logic here
					console.log('alla');
					$scope.clickToClose = function() {
						
					};

				}]
			});
		};
		


		$scope.clickToOpen = function () {
			ngDialog.open({ 
				template: 'popupTmpl.html',
				className: 'ngdialog-theme-default',
				controller: ['$scope', function($scope) { 
					// Controller logic here
					console.log('alla');
					$scope.clickToClose = function() {
						console.log('jojo');
						$scope.closeThisDialog(0);
						$location.path('/calendario');
					};

				}]
			});
		};

		

		


		 
		  
 




    });