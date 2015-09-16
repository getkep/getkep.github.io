app.controller('homeController', function($scope, $http, $location){

});

app.controller('docsController', function($scope, $http, $location){

});

app.controller('aboutController', function($scope, $http, $location){

});

app.controller('routingController', function($scope, $http, $location){

});

app.controller('controllerController', function($scope, $http, $location){

});

app.controller('modelController', function($scope, $http, $location){

});

app.controller('querybuilderController', function($scope, $http, $location){

});

app.controller('seedsController', function($scope, $http, $location){

});

app.controller('angularjsController', function($scope, $http, $location){

});

app.controller('authenticationController', function($scope, $http, $location){

});

app.controller('storeController', function($scope, $http, $location){
	$scope.jsonCheckout = [
		{
			value: 0,
			products: {
				stk001: 0,
				stk002: 0,
				stk003: 0,
			}
		}
	];
	
	$scope.value = 0.00;
	
	$scope.isMsg = false;
	$scope.Msg = null;
	
	$scope.buy = function (params) {
		$scope.value = $scope.value + 5.99;
		
		$scope.jsonCheckout.value = $scope.value;
		$scope.jsonCheckout[0].products[params] = $scope.jsonCheckout[0].products[params] + 1;
		console.log($scope.jsonCheckout);
	}
	
	$scope.checkout = function(){
		if($scope.value == 0.00){
			$scope.isMsg = true;
			$scope.Msg = "O carrinho está vazio :/";
		}else{
			$scope.isMsg = true;
			$scope.Msg = "Ficamos felizes pelo o seu interesse, mais a loja não está pronta ainda :/"
		}
	}
});