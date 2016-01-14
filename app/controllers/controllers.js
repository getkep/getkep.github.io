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

app.controller('headersController', function($scope, $http, $location){

});

app.controller('storeController', function($scope, $http, $location){
	$scope.jsonCheckout = [
		{
			value: 0,
			products: {
				stk001: {
					name: "Kep (Logo) Sticker",
					refcode: "stk001",
					quantity: 0,
				},
				stk002: {
					name: "Kep (horizontal) Sticker",
					refcode: "stk002",
					quantity: 0,	
				},
				stk003: {
					name: "Kep (horizontal 2) Sticker",	
					refcode: "stk003",
					quantity: 0,
				},
			}
		}
	];
	
	$scope.value = 0.00;
	
	$scope.isMsg = false;
	$scope.Msg = null;
	
	$scope.close = function(){
		$scope.isMsg = false;
	}
	
	$scope.buy = function (params) {
		$scope.value = $scope.value + 6;
		
		$scope.jsonCheckout[0].value = $scope.value;
		$scope.jsonCheckout[0].products[params].quantity = $scope.jsonCheckout[0].products[params].quantity + 1;
		console.log($scope.jsonCheckout);
	}
	
	$scope.delete = function(params){
		$scope.value = $scope.value - 6;
		
		$scope.jsonCheckout[0].value = $scope.value;
		$scope.jsonCheckout[0].products[params].quantity = $scope.jsonCheckout[0].products[params].quantity - 1;
		
	}
	
	$scope.checkout = function(){
		if($scope.value == 0.00){
			$scope.isMsg = true;
			$scope.Msg = "O carrinho está vazio :/";
		}else if($scope.value >= 100){
			$scope.isMsg = true;
			$scope.Msg = "Uhouuu emprisionante a quantidade de stickers que você deseja, agora teremos café por um bom tempo ;). mas a loja não está pronta ainda :/"
		}else{
			$scope.isMsg = true;
			$scope.Msg = "Ficamos felizes pelo o seu interesse, mas a loja não está pronta ainda :/"
		}
	}
});

app.controller('involvedController', function($scope, $http, $location){
	$scope.BarLabels = ["01", "02", "03", "04", "05", "06", "07"];
    $scope.BarData = [
		[1, 9, 10, 10, 10, 15, 30],
		[1, 1, 1, 2, 2, 1, 4],
		[6, 1, 1, 1, 2, 1, 0]
	];
	$scope.Barcolours = [
      {
        fillColor: '#3e2c5a',
        strokeColor: '#3e2c5a',
      },
      {
        fillColor: '#422f60',
        strokeColor: '#422f60',
      },
	  {
        fillColor: '#4a356b',
        strokeColor: '#4a356b',
      }
    ];
	$scope.Docolours = ['#2d2042', '#4f3b6f'];
	
	$scope.labels = ["Incomplet", "Complete"];
	$scope.data = [30, 4];
	$scope.data2 = [4, 26];
	$scope.data3 = [0, 30];
	
	$scope.options = {
		segmentShowStroke : false,
		animateRotate : true,
		animationEasing: "easeInOutQuad",
		animationSteps : 40,
		showTooltips : false,
		percentageInnerCutout: 85
	};
	$scope.Baroptions = {
		responsive : false,
		barValueSpacing:  3,
        scaleShowLabels: false,
        showScale: false,
        showTooltips: false
	};
});