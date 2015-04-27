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

app.controller("AppCtrl2", function ($scope, $http, $routeParams, $location) {
	//$scope.quantity = 1;
	$scope.phoneForAddress = 0;
	
	$scope.GetPhoneForAddress = 	function() 
		{
			console.log("angularapp.js GetPhoneForAddress");
			//calculateService.calculate();
		
			$http.get('/api/GetPhoneForAddress/' + $scope.AddressId).
				success(function(data, status, headers, config) {
					console.log('angularapp.js GetPhoneForAddress success: ' + data);
					$scope.phoneForAddress = data;
				});
			
		};
		
	$scope.UpdatePhoneForAddress = 	function() 
		{
			console.log("angularapp.js UpdatePhoneForAddress. $routeParams.id:" + $scope.AddressId + 
			", $scope.NewPhoneNumber: " + $scope.NewPhoneNumber);
					
			$http.put('/api/UpdatePhoneForAddress/' + $scope.AddressId, {NewPhoneNumber: $scope.NewPhoneNumber}).
				success(function(data, status, headers, config) {
					console.log('angularapp.js UpdatePhoneForAddress success: ' + data);
					//$scope.apartmentIdResult = data;
					//$location.url('/');
					$scope.GetPhoneForAddress();
				});
			
		};
	
});

/*
 app.factory('calculateService', function($http , $sc){
		return {
		  calculate: function(){
			$http.get('/api/posts').
				success(function(data, status, headers, config) {
					$scope.quantityResult = data;
				});
		  }	 
		}				
	  });
*/
