'use strict';
angular.module('calasia',['ngRoute'])
	.config(["$routeProvider", "$locationProvider", "$interpolateProvider", function ($routeProvider, $locationProvider, $interpolateProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'partials/home'
			})
			.when('/programs',{
				templateUrl: 'partials/programs'
			})
			.when('/calendard',{
				templateUrl: 'partials/calendard',
				controller:"calendardCtrl"
			})
			.when('/login',{
				templateUrl: 'partials/login'
			})
			.when('/admin',{
				templateUrl: 'partials/admin',
				controller: 'adminCtrl'
			})
			.when('/addEvent',{
				templateUrl: 'partials/addEvent',
				controller:"addEventCtrl"
			})
			.otherwise({
		      redirectTo: '/'
		    });
		$locationProvider.html5Mode(true);
		$interpolateProvider.startSymbol('[[');
  		$interpolateProvider.endSymbol(']]');
	}])
	.controller("calendardCtrl",function ($scope, $http){
		$http.get("/api/events").success(function(data, status, headers, config){
			$scope.events = data;
		})
	})
	.controller("addEventCtrl",function ($scope, $http, $location){
		$scope.form = {};
		$scope.form.date = {};
		$scope.form.registration = {};
		(function(){
		    $scope.form.date.full = new Date();
		    $scope.form.registration.date = new Date();
		})();
		$scope.submitEvent = function () {
			if($scope.form.date.full){
				var monthArr = ["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				$scope.form.date.date = weekdayArr[$scope.form.date.full.getDay()] +", "+monthArr[$scope.form.date.full.getMonth()]+" "+$scope.form.date.full.getDate()+", "+$scope.form.date.full.getFullYear();
			}
			if($scope.form.images!=undefined) $scope.form.images = $scope.form.images.split(" ");
			if($scope.form.speakers!=undefined) $scope.form.speakers = $scope.form.speakers.split(" ");
			if($scope.form.sponsors!=undefined) $scope.form.sponsors = $scope.form.sponsors.split(" ");

			if ($scope.form.description===undefined){
				alert("Empty body");
				return;
			}
			else{
				$scope.form.description = $scope.form.description.match(/^.+/mg);
			}
			if ($scope.form.schedule===undefined){
				alert("Empty body");
				return;
			}
			else{
				$scope.form.schedule = $scope.form.schedule.match(/^.+/mg);
			}

			$http.post('/api/events/new', $scope.form).
			  success(function(data) {
			  	alert("event added");
			  	$location.path('/admin');
			  });
		};
	})
	.controller("adminCtrl", function ($scope, $http, $timeout){
		$http.get('/api/events').success(function(data, status, headers, config){
			$scope.events = data;
			$scope.count = $scope.events.length;
			$scope.events.forEach(function(item, i){
				item.sponsors = item.sponsors.join(", ");
			})
		})
		$scope.deleteEvent = function(id){
		    var current = "#"+id;
		    if(confirm("Are you sure you want to delete this message?")==true){
		      $http.delete('api/events/'+id)
		        .success(function(data){
		          $(current).fadeOut("fast");
		          $scope.count--;
		        })
		    }
		}
	})
Date.prototype.formatDate = function () {
  var monthArr = ["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdayArr[this.getDay()] +", "+monthArr[this.getMonth()]+" "+this.getDate()+", "+this.getFullYear();
}

Date.prototype.convertDate = function(){
  var month = (this.getMonth()+1).toString();
  var date = this.getDate().toString();
  return this.getFullYear() + "-" + (month.length==2?month:"0"+month[0])+"-"+(date.length==2?date:"0"+date[0]);
}

function getDateObj(dateString){
  // var data = dateString.split("-");
  // var month = (parseInt(data[1])-1).toString();
  return  new Date(dateString);
}
