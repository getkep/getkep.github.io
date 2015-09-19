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
      category    : 'home',
      title       : 'Kep Framework for PHP',
      templateUrl : 'app/views/home.html',
      controller  : 'homeController',
   })
   .when('/about', {
      category    : 'about',
      title       : 'Sobre - Kep Framework for PHP',
      templateUrl : 'app/views/about.html',
      controller  : 'aboutController',
   })
   .when('/docs', {
      category    : 'started',
      title       : 'Documentation - Kep Framework for PHP',
      templateUrl : 'app/views/docs.html',
      controller  : 'docsController',
   })
   .when('/store', {
      category    : 'store',
      title       : 'Store - Kep Framework for PHP',
      templateUrl : 'app/views/store.html',
      controller  : 'storeController',
   })
   .when('/blog', {
      category    : 'blog',
      title       : 'Blog - Kep Framework for PHP',
      templateUrl : 'app/views/blog.html',
      controller  : 'blogController',
   })
   .when('/docs/routing', {
      category    : 'docs',
      title       : 'Routing - Kep Framework for PHP',
      templateUrl : 'app/views/routing.html',
      controller  : 'routingController',
   })
   .when('/docs/controller', {
      category    : 'docs',
      title       : 'Controller - Kep Framework for PHP',
      templateUrl : 'app/views/controller.html',
      controller  : 'controllerController',
   })
   .when('/docs/model', {
      category    : 'docs',
      title       : 'Model - Kep Framework for PHP',
      templateUrl : 'app/views/model.html',
      controller  : 'modelController',
   })
   .when('/docs/query-builder', {
      category    : 'docs',
      title       : 'Query Builder - Kep Framework for PHP',
      templateUrl : 'app/views/query-builder.html',
      controller  : 'querybuilderController',
   })
   .when('/docs/seeds', {
      category    : 'docs',
      title       : 'Seeds - Kep Framework for PHP',
      templateUrl : 'app/views/seeds.html',
      controller  : 'seedsController',
   })
   .when('/docs/angularjs', {
      category    : 'docs',
      title       : 'AngularJS - Kep Framework for PHP',
      templateUrl : 'app/views/angularjs.html',
      controller  : 'angularjsController',
   })
   .when('/docs/authentication', {
      category    : 'docs',
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
        $rootScope.category = current.$$route.category;
   });
});