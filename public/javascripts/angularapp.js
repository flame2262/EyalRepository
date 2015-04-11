var app = angular.module('myApp', ['ngRoute']);

app.config	(
				['$routeProvider', '$locationProvider', 

					function($routeProvider, $locationProvider) 
					{
							$routeProvider.when("/",
												{
													templateUrl: "/gem",
													controller: "AppCtrl2"
												}).
											otherwise(
												{
													redirectTo: '/'
												});
							
							$locationProvider.html5Mode(true);
					}  
				]
			);

app.controller("AppCtrl", function($scope,req) {
		$scope.model = 345345;
});

app.controller("AppCtrl2", function ($scope, $http, calculateService) {
	$scope.quantity = 1;
	$scope.quantityResult = 0;
	
	$scope.calculateQuantity = 	function() 
		{
			//console.log("crap@#$");
			//$scope.quantityResult = calculateService.calculate();
			
			$http.get('/api/posts').
				success(function(data, status, headers, config) {
					console.log(data);
					$scope.quantityResult = data;
				});
			
		};
	
});

/*
 app.factory('calculateService', function($http){
		return {
		  calculate: function(){
			$http.get('/api/posts').
				success(function(data, status, headers, config) {
					return data;
				});
		  }	 
		}				
	  });
*/
