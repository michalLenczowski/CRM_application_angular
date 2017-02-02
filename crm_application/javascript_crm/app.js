(function(){
	var app=angular.module('apkacrm',['crmservices','ngRoute','ngMessages']);
	
	app.config(['$routeProvider',function($routeProvider){

		$routeProvider
			.when('/clients',{
				templateUrl:'clients-list.html'	
			})
			.when('/clients/:clientId',{
				templateUrl:'client-details.html'	
			})
			.when('/sectors',{
				templateUrl:'sectors-list.html'	
			})
			.when('/users',{
				templateUrl:'users-list.html'	
			})
			.otherwise({
				redirectTo:'/clients'
			})
	}]);


app.controller('ClientsCtrl', function($scope,DataProvider){
	$scope.data=DataProvider;
	$scope.orderByColumn='id';
	$scope.orderByDir=false;
	$scope.filterBy=[];
	
	$scope.changeOrder=function(columnName){
		if($scope.orderByColumn==columnName)
			$scope.orderByDir=!$scope.orderByDir;
		else{
			$scope.orderByColumn=columnName;
			$scope.orderByDir=false;
		}
	};

	$scope.isOrderedBy=function(columnName){
		return ($scope.orderByColumn==columnName);
	};

	$scope.isOrderedReverse=function(){
		return !$scope.orderByDir;
	};


});

app.controller('ClientsDetailsCtrl',function($scope,$routeParams,$timeout,DataProvider){
	$scope.client={};
	$scope.data=DataProvider;
	$scope.clientNotFound=false;
	
	$scope.saveClientsFormMsg=false;	
	$scope.newEventCreatedMsg=false;
	$scope.tab_timeline=[];
	$scope.timeline={user_manager:'',contact_date:'',contact_type:'',notes:''};

	if('new'!=$routeParams.clientId){
		$scope.client=$scope.data.clients[$routeParams.clientId-1];	
			$scope.tab_timeline=$scope.client.contact;
			$scope.tab_timeline=$scope.data.parseTimeline($scope.tab_timeline);
	}


	$scope.saveClientsData=function(){
		if($scope.clientForm.$invalid) return;
		if('new'==$routeParams.clientId){

			
			$scope.data.addNewClient($scope.client);
			$routeParams.clientId=$scope.data.index;
			return;
		}		

			$scope.data.update($routeParams.clientId, $scope.client)
		
			$scope.saveClientsFormMsg=true;
			$timeout(function(){

				$scope.saveClientsFormMsg=false;
			},5000);	
	
	
	};

	$scope.addEventTimeline=function(){
		if($scope.eventForm.$invalid)return;

		$scope.timeline=$scope.data.parseTimeline($scope.timeline);
		$scope.data.addTimelineEvent($routeParams.clientId,$scope.timeline);
		$scope.timeline={user_manager:'',contact_date:'',contact_type:'',notes:''};

			$scope.newEventCreatedMsg=true;
			$scope.eventForm.$setUntouched();
			$scope.eventForm.$submitted=false;

			$timeout(function(){
				$scope.newEventCreatedMsg=false;
			},5000);
	
				
	};
	
	$scope.delete=function(){
		$scope.data.remove($scope.client);
	}
	
	});


	app.controller('sectorsCtrl', function($scope,DataProvider){
		$scope.data=DataProvider;
		$scope.filterBy=[];
		
		
	});

	app.controller('UsersCtrl', function($scope,DataProvider){
		$scope.data=DataProvider;
		$scope.filterBy=[];
		
		
	});

	app.controller('MainCtrl', ['$scope','routetest', function($scope,routetest){
		$scope.routetest=routetest;
	}]);
})();