
    var EduMed = angular.module('EduMed', [
        'ngDialog',
        'ui.bootstrap',
        'ngRoute',
        "ngSanitize",
        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls",
        "com.2fdevs.videogular.plugins.buffering",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.poster",
        "info.vietnamcode.nampnq.videogular.plugins.youtube",
        'EduMedApp.utils',
        'EduMedApp.enrolled',
        'EduMedApp.planes',
        'EduMedApp.main',
        'EduMedApp.home',
        'EduMedApp.modulos',
        'EduMedApp.calendario',
        'EduMedApp.pacientes',
        'EduMedApp.tratamientos',
        'EduMedApp.calendarioDirectives',
        'EduMedApp.AppUtilDirectives',
        'EduMedApp.services',
        'angularMoment',
        'slickCarousel'
        ]);

    // configure our routes
    EduMed.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'modules/home/templates/home.html',
                controller  : 'homeCtrl',
            })
            // route for the planes page
            .when('/planes', {
                templateUrl : 'modules/planes/templates/planes.html',
                controller  : 'planesCtrl',
            })
            // route for the planes pagar
            .when('/pagar', {
                templateUrl : 'modules/planes/templates/pagar.html',
                controller  : 'planesCtrl',
            })

            // route for the pacientes page
            .when('/pacientes', {
                templateUrl : 'modules/pacientes/templates/pacientes.html',
                controller  : 'pacientesCtrl',
            })
             // route for the tratamientos page
            .when('/tratamientos', {
                templateUrl : 'modules/tratamientos/templates/tratamientos.html',
                controller  : 'tratamientosCtrl',
            })
            // route for the enrolled page
            .when('/enrolled', {
                templateUrl : 'modules/enrolled/templates/enrolled.html',
                controller  : 'enrolledCtrl',
            })
            // route for the about page
            .when('/calendario', {
                templateUrl : 'modules/calendario/templates/calendario.html',
                controller  : 'calendarioCtrl'
            })

            // route for the about page
            .when('/modulos', {
                templateUrl : 'modules/modulos/templates/modulos.html',
                controller  : 'modulosCtrl'
            });
    });
  EduMed.run(function($rootScope) {
    
  });



EduMed.service( 'Moment', [ '$rootScope', function( $rootScope ) {
   var service = {
     moments: [
        {
        tipo: 'estudio',
        fecha: '2016-04-29T03:00:00.000Z'
       },
       {
        tipo: 'estudio',
        fecha: '2016-04-29T03:00:00.000Z'
       },
       {
        tipo: 'cita',
        fecha: '2016-04-16T03:00:00.000Z'
       }
     ],
 
     addMoment: function ( moment ) {
       service.moments.push( moment );
       $rootScope.$broadcast( 'moments.update' );
     }
   }
 
   return service;
 }]);

EduMed.factory('bodyService', function() {
  var bodyClass = '';
  return {
    bodyClass: function() {
      return bodyClass;
    },
    setBodyClass: function(newBodyClass) {
      bodyClass = newBodyClass;
    }
  };
});


    
  

