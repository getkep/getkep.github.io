var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider){   
   // remove o # da url
   //$locationProvider.html5Mode({
   //    enabled: true,
   //    requireBase: false
   //});

   $routeProvider
 
   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      title       : 'Kep Framework for PHP',
      templateUrl : 'app/views/home.html',
      controller  : 'homeController',
   })
   .when('/about', {
      title       : 'Sobre - Kep Framework for PHP',
      templateUrl : 'app/views/about.html',
      controller  : 'aboutController',
   })
   .when('/docs', {
      title       : 'Documentation - Kep Framework for PHP',
      templateUrl : 'app/views/docs.html',
      controller  : 'docsController',
   })
   .when('/docs/routing', {
      title       : 'Routing - Kep Framework for PHP',
      templateUrl : 'app/views/routing.html',
      controller  : 'routingController',
   })
   .when('/docs/controller', {
      title       : 'Controller - Kep Framework for PHP',
      templateUrl : 'app/views/controller.html',
      controller  : 'controllerController',
   })
   .when('/docs/model', {
      title       : 'Model - Kep Framework for PHP',
      templateUrl : 'app/views/model.html',
      controller  : 'modelController',
   })
   .when('/docs/query-builder', {
      title       : 'Query Builder - Kep Framework for PHP',
      templateUrl : 'app/views/query-builder.html',
      controller  : 'querybuilderController',
   })
   .when('/docs/seeds', {
      title       : 'Seeds - Kep Framework for PHP',
      templateUrl : 'app/views/seeds.html',
      controller  : 'seedsController',
   })
   .when('/docs/angularjs', {
      title       : 'AngularJS - Kep Framework for PHP',
      templateUrl : 'app/views/angularjs.html',
      controller  : 'angularjsController',
   })
   .when('/docs/authentication', {
      title       : 'Authentication - Kep Framework for PHP',
      templateUrl : 'app/views/authentication.html',
      controller  : 'authenticationController',
   })
 
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});

app.run(function($rootScope, $templateCache) {
   $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
   $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
   });
});