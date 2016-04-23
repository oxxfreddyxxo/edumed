
angular.module('EduMedApp.AppUtilDirectives', [])



.directive("backgroundChange", function($rootScope) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			console.log('background-change',element);

			function run(interval, frames) {
				var int = 1;
			    
				function func() {
					document.body.id = "b"+int;
					document.body.style.backgroundImage = "url('img/back/back"+int+".jpg')";
			        int++;
			        if(int === frames) { int = 1; }
			    }
			    
			    var swap = window.setInterval(func, interval);
			}

			run(15000, 3); //milliseconds, frames
						 
		}
	};
});
		

           
		



