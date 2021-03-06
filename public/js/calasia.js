'use strict';
angular.module('calasia',['ngRoute','ngSanitize'])
	.config(["$routeProvider", "$locationProvider", "$interpolateProvider", function ($routeProvider, $locationProvider, $interpolateProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'partials/home',
				controller: "homeCtrl"
			})
			.when('/programs',{
				templateUrl: 'partials/programs',
				controller:"programsCtrl"
			})
			.when('/calendar',{
				templateUrl: 'partials/calendar',
				controller:"calendarCtrl"
			})
			.when('/events/:id',{
				templateUrl: 'partials/event',
				controller:"eventCtrl"
			})
			.when('/resources',{
				templateUrl: 'partials/resources',
				controller:"resourcesCtrl"
			})
			.when('/resources/:country',{
				templateUrl: 'partials/resources',
				controller:"resourcesCtrl"
			})
			.when('/resources-orgs',{
				templateUrl: 'partials/resources-orgs',
				controller:"resourcesCtrl"
			})
			.when('/resources-seniorofficials',{
				templateUrl: 'partials/resources-seniorofficials',
				controller:"resourcesCtrl"
			})
			.when('/membership', {
				templateUrl: 'partials/membership',
				controller:"membershipCtrl"
			})
			.when('/board', {
				templateUrl: 'partials/board',
				controller:"boardCtrl"
			})
			//.when('/blog', {
			//	templateUrl: 'partials/blog',
			//	controller:"blogCtrl"
			//})
			//.when('/blog/:id', {
			//	templateUrl: 'partials/blogEntry',
			//	controller:"blogCtrl"
			//})
			.when('/contact',{
				templateUrl: 'partials/contact'
			})
			.when('/about',{
				templateUrl: 'partials/about',
				controller: 'aboutCtrl'
			})
			.when('/internship',{
				templateUrl: 'partials/internship'
			})
			.when('/interns',{
				templateUrl: 'partials/interns'
			})
			.when('/asiabuild',{
				templateUrl: 'partials/asiabuild'
			})
			.when('/login',{
				templateUrl: 'partials/login',
				controller: 'loginCtrl'
			})
			.when('/admin',{
				templateUrl: 'partials/admin',
				controller: 'adminCtrl',
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/adminCarousel',{
				templateUrl: 'partials/adminCarousel',
				controller: 'adminCarouselCtrl',
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/adminEvent',{
				templateUrl: 'partials/adminEvent',
				controller: 'adminEventCtrl',
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/adminUpdate',{
				templateUrl: 'partials/adminUpdate',
				controller: 'adminUpdateCtrl',
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			//.when('/adminBlog',{
			//	templateUrl: 'partials/adminBlog',
			//	controller: 'adminBlogCtrl',
			//	resolve:{
			//		auth: function ($q, authenticationService, $location){
			//			var userInfo = authenticationService.getUserInfo();
			//			if (userInfo) {
			//				return $q.when(userInfo);
			//			}
			//			else{
			//				$location.path('/login');
			//				return $q.reject({authenticated:false});
			//			}
			//		}
			//	}
			//})
			.when('/adminBoard',{
				templateUrl: 'partials/adminBoard',
				controller: 'adminBoardCtrl',
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/adminContent',{
				templateUrl: 'partials/adminContent',
				controller: 'adminContentCtrl',
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/addEvent',{
				templateUrl: 'partials/addEvent',
				controller:"addEventCtrl",
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/editEvent/:id',{
				templateUrl:'partials/addEvent',
				controller:"editEventCtrl",
				resolve:{
					auth: function ($q, authenticationService){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/addUpdate',{
				templateUrl: 'partials/updateform',
				controller:"addUpdateCtrl",
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/editUpdate/:id',{
				templateUrl:'partials/updateform',
				controller:"editUpdateCtrl",
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/addBlog',{
				templateUrl: 'partials/blogform',
				controller:"addBlogCtrl",
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/editBlog/:id',{
				templateUrl:'partials/blogform',
				controller:"editBlogCtrl",
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/addBoard',{
				templateUrl: 'partials/boardForm',
				controller:"addBoardCtrl",
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/editBoard/:id',{
				templateUrl:'partials/boardForm',
				controller:"editBoardCtrl",
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/addContent',{
				templateUrl: 'partials/contentForm',
				controller:"addContentCtrl",
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/editContent/:id',{
				templateUrl:'partials/contentForm',
				controller:"editContentCtrl",
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.when('/editCarousel/:id',{
				templateUrl:'partials/carouselform',
				controller:"editCarouselCtrl",
				resolve:{
					auth: function ($q, authenticationService, $location){
						var userInfo = authenticationService.getUserInfo();
						if (userInfo) {
							return $q.when(userInfo);
						}
						else{
							$location.path('/login');
							return $q.reject({authenticated:false});
						}
					}
				}
			})
			.otherwise({
		      redirectTo: '/'
		    });
		$locationProvider.html5Mode(true);
		$interpolateProvider.startSymbol('[[');
  		$interpolateProvider.endSymbol(']]');
	}])
	.controller("homeCtrl",function ($window, $scope, $http, $location, authenticationService, $routeParams){
		window.scrollTo(0,0);
		$scope.$on('onRepeatFirst', function(scope, element, attrs){
			$(element).addClass('active');
		});
		var modalLinks=[];
		$http.get("/api/carousel").success(function(data, status, headers, config){
			if(data.length==0){
				data.push({
					order:1,
					title:"California-Asia Business Council",
					text:"One of California's leading private-sector, non-profit, international business-promotion associations",
					image:'<img src="img/cal-asia-logo-green.svg">'
				});
			}
			$scope.carousel = data;
			$scope.carousel.forEach(function(item, i){
				item.image = item.image.slice(9, item.image.length-1);
				item.index = item.order - 1;
				var oldLinks = item.text.match(/<a class="" href="(update|event):.+?>/g);
				var newLinks=[];
				if(oldLinks){
					for (var i=0;i<oldLinks.length;i++){
						newLinks.push(oldLinks[i]);
						var curr = newLinks.length-1;
						newLinks[curr] = newLinks[i].slice(18,newLinks[i].length-2);
						newLinks[curr] = newLinks[curr].split(/:\s*/);
						var type = newLinks[curr].shift();
						var title = newLinks[curr].join(": ");
						newLinks[curr] = "<a class=\""+title.replace(/[^\w]+/g,'')+"\">";
						modalLinks.push("."+title.replace(/[^\w]+/g,''));
						item.text = item.text.replace(new RegExp(oldLinks[i]), newLinks[curr]);
						$http.get('/api/'+type+'Title/'+title).success(function(data, status, headers, config){
							if(data.update!=undefined){
								if(data.update.date==undefined) data.update.date={string:''};
								$('#rightColumn').append('<div class="modal fade" id="'+data.update.title.replace(/[^\w]+/g,'')+'"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button class="close" data-dismiss="modal">&times;</button> <h3 class="modal-title">'+data.update.title+'<br><small>'+data.update.date.string+'</small></h3> </div> <div class="modal-body"> <p>'+data.update.description+'</p> </div> <div class="modal-footer"> <button class="btn btn-primary" data-dismiss="modal" type="button">Close</button></div></div></div></div>');
							}
							else if(data.event!=undefined) {
								var eventName = data.event.name.replace(/[^\w]+/g,''),
									eventDate = data.event.date==undefined?'TBA':'Date: '+data.event.date.string,
									eventTime = data.event.eventTime==undefined?'':', Time: '+data.event.eventTime.string,
									eventLocation = data.event.location==undefined?'TBA':'Location: '+data.event.location,
									eventCapacity = data.event.capacity==undefined?'':'Capacity: '+data.event.capacity,
									eventPrice = data.event.price==undefined?'':'Price: $'+data.event.price,
									eventMPrice = data.event.memberPrice==undefined?'':'Member: $'+data.event.memberPrice,
									eventExtLink = data.event.externalLink==undefined?'':'<a href="'+data.event.externalLink+'" target="_blank"><button class="btn btn-default" type="button"> More Details <span class="glyphicon glyphicon-new-window"></span></button></a>',
									eventRegUrl = data.event.past?'':'<div style="display:inline-block"><a href="'+data.event.registration.url+'" target="_blank" ng-show="event.registration.url"><button class="btn btn-success" type="button">Register for this Event</button></a></div>',
									eventPast = data.event.past?'<div style="display:inline-block; color:red" class="pull-left"><p>This event has passed.</p></div>':'',
									eventDescription = data.event.description==undefined?'Coming soon...':data.event.description;
								$('#leftColumn').append('<div class="modal fade" id="'+data.event.name.replace(/[^\w]+/g,'')+'"> <div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">'+data.event.name+'</h4><h5>'+eventDate+eventTime+'</h5><h5>'+eventLocation+'</h5><h5>'+eventCapacity+'</h5><h5>'+eventPrice+'</h5><h5>'+eventMPrice+'</h5></div><div class="modal-body"><p>'+eventDescription+'</p></div><div class="modal-footer">'+eventPast+eventExtLink+eventRegUrl+'<button class="btn btn-primary" data-dismiss="modal" type="button">Close</button></div></div></div></div>');
							}
						})
					}
				}
			})
		})
		window.setTimeout(function(){
			$(modalLinks.join(",")).click(function(){
				var id = "#"+$(this).attr('class');
				$(id).modal('show');
			});
		},1000)
		$http.get("/api/pageContent/home").success(function(data, status, headers, config){
			$scope.content = data;
		})
		$http.get("/api/upcomingEvents").success(function(data, status, headers, config){
			if(data.length==0){
				$scope.upcomingEvents = [{name:"No Upcoming Events"}];
			}
			else{
				$scope.upcomingEvents = data.slice(0,2);
				var today = new Date();
				today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23,59,59);
				$scope.upcomingEvents.forEach(function(item, i){
					item.countDown = Math.ceil((new Date(item.date.full) - today) / 86400000);
					if(item.countDown == 0) item.countDown = 'Today';
					else if (item.countDown == 1) item.countDown = 'Tomorrow';
					else item.countDown = 'In '+item.countDown+' Days';
				})
			}
		})
		$http.get("/api/updates").success(function(data, status, headers, config){
			var updateCount = 2;
			if(data.length==0){
				data.push({title:"No Updates"});
			};
			$scope.updates = data.slice(0,updateCount);
			for (var i=0;i<updateCount;i++){
				/* var temp = data[i].description.match(/<.*?\/[a-zA-Z]+>/)[0];
				$scope.updates[i].more = temp.length==data[i].description.length?false:true;*/
				var temp = $scope.updates[i].description.match(/.+?<br>/);
				if (temp!=null) $scope.updates[i].preview = temp[0];
				else $scope.updates[i].preview = $scope.updates[i].description;
				$scope.updates[i].more = temp!=null?true:false;
			}
		})
		$scope.setActive = function(){
			$('#slide1').addClass('active');
		}
		$scope.showModal = function (id){
			var selector = "#"+id;
			$(selector).modal('show');
		}
			$("[contenteditable]").attr('contenteditable',false);
	})
	.controller("programsCtrl",function ($scope, $http){
		window.scrollTo(0,0);
		$scope.page.setTitle('Cal-Asia Programs');
		$scope.page.setDescription('The Council\'s programs in California have featured heads of state from Malaysia and the Philippines, Vietnam\'s Deputy Prime Minister, Chinese, and other Asian trade and economic ministers, ambassadors of the United States and Asian contries, and senior business leaders from both sides of the Pacific.');
		$http.get("/api/pageContent/programs").success(function(data, status, headers, config){
			$scope.content = data;
		})
		var currYear=new Date().getFullYear();
		$http.get("/api/events/"+currYear).success(function(data, status, headers, config){
			if(data.length==0){
				data.push({name:"No Events in " +currYear});
			}
			$scope.events = data;
		})
		$scope.getYear = function(year){
			$http.get("/api/events/"+year).success(function(data, status, headers, config){
				if(data.length==0){
					data.push({name:"No Events in "+year});
				}
				$scope.events = data;
			})
		}
		$scope.showModal = function (id){
			var selector = "#"+id;
			$(selector).modal('show');
		}
	})
	.controller("calendarCtrl",function ($scope, $http){
		window.scrollTo(0,0);
		$scope.page.setTitle('Cal-Asia Calendar');
		$scope.page.setDescription('See all upcoming Cal-Asia programs and events, and all upcoming featured international events.');

		$http.get("/api/upcomingInternalEvents").success(function(data, status, headers, config){
			if(data.length==0){
				data.push({name:"No Upcoming Internal Events"});
			}
			$scope.internalEvents = data;
		})
		$http.get("/api/upcomingExternalEvents").success(function(data, status, headers, config){
			if(data.length==0){
				data.push({name:"No Upcoming External Events"});
			}
			$scope.externalEvents = data;
		})
		$scope.showModal = function (id){
			var selector = "#"+id;
			$(selector).modal('show');
		}
	})
	.controller("resourcesCtrl",function ($scope, $routeParams){
		$scope.page.setTitle('Cal-Asia Resources');
		$(".menubox").hide();
		$(".menuitem").click(function(event) {
			event.preventDefault();
			$(".menubox").hide();
			var relatedDivID = $(this).attr('href');

			$("" + relatedDivID).fadeToggle("fast", "linear");

		});
		$(".nav-tabs li").click(function(event){
			event.preventDefault();
			var tabID = $(this).attr('href');
			$(""+tabID).tab('show');
		})
		if($routeParams.country != undefined){
			$('html,body').animate({scrollTop: $('#economyMenu').offset().top},1000);
			var country = $routeParams.country;
			$('#'+country).fadeToggle("fast", "linear");
		}
		else{
			window.scrollTo(0,0);
		}
	})
	.controller("aboutCtrl", function($scope, $http){
		window.scrollTo(0,0);
		$scope.page.setTitle('About Cal-Asia');
		$('#toggle-view li h3, #toggle-view li strong').click(function () {
	        var text = $(this).parent().children('div.panel');
	        if (text.is(':hidden')) {
	            text.slideDown('200');
	            $(this).children('span').html('-');        
	        } else {
	            text.slideUp('200');
	            $(this).children('span').html('+');        
	        }
	    });
	    $http.get("/api/board/officers").success(function(data, status, headers, config){
			$scope.officers = data;
		})
		$http.get("/api/board/directors").success(function(data, status, headers, config){
			$scope.directors = data;
		})
	})
	.controller("membershipCtrl", function($scope,$http){
		window.scrollTo(0,0);
		$scope.page.setTitle('Cal-Asia Membership');
		$http.get('/api/pageContent/membership').success(function(data, status, headers, config){
			$scope.membership = data;
		})
		$('#toggle-view li h3, #toggle-view li strong').click(function () {
	        var text = $(this).parent().children('div.panel');
	        if (text.is(':hidden')) {
	            text.slideDown('200');
	            $(this).children('span').html('-');        
	        } else {
	            text.slideUp('200');
	            $(this).children('span').html('+');        
	        }
	    });
	})
	.controller("eventCtrl", function ($scope, $http, $routeParams){
		window.scrollTo(0,0);
		var id = $routeParams.id;
		$http.get("/api/event/"+id).success(function(data, status, headers, config){
			$scope.event = data.event;
			if($scope.event.banner == undefined) $scope.event.banner = "img/Cal-Asia-Asia-Globe.jpg";
			else $scope.event.banner = data.event.banner.slice(9, data.event.banner.length-1);
			$scope.page.setTitle(data.event.name);
		})
	})
	.controller("blogCtrl", function ($scope, $http, $routeParams){
		$scope.page.setTitle('Cal-Asia Blog');
		window.scrollTo(0,0);
		if($routeParams.id==undefined){
			$http.get('/api/blogs').success(function(data){
				if(data.length==0){
					data.push({name:"No Entry"});
				}
				$scope.blogs = data;
			})
		}
		else{
			var id = $routeParams.id;
			$http.get("/api/blog/"+id).success(function(data, status, headers, config){
				$scope.blog = data.blog;
			})
		}
	})
	.controller("boardCtrl",function ($scope, $http){
		$scope.page.setTitle('Cal-Asia Board');
		window.scrollTo(0,0);
		$http.get("/api/board/officers").success(function(data, status, headers, config){
			$scope.officers = data;
			$scope.officers.forEach(function(member, i){
				if(member.image.length>0) member.image = member.image.slice(9, member.image.length-1);
				else member.image = '../img/default-profile.jpg';
			});
		})
		$http.get("/api/board/directors").success(function(data, status, headers, config){
			$scope.directors = data;
			$scope.directors.forEach(function(member, i){
				if(member.image.length>0) member.image = member.image.slice(9, member.image.length-1);
				else member.image = '../img/default-profile.jpg';
			});
		})
		$scope.showModal = function (id){
			var selector = "#"+id;
			$(selector).modal('show');
		}
	})
	.controller('adminEventCtrl', function ($scope, $filter, $http, $location, authenticationService) {
		window.scrollTo(0,0);
		$http.get('/api/events').success(function(data, status, headers, config){
			$scope.eventCount = data.length;
		})
		$http.get('/api/events/2015').success(function(data, status, headers, config){
			$scope.events = data;
			$scope.yearEventCount = $scope.events.length;
			$scope.year = "2015";
		})
		$scope.showYear =function(year){
			if (year == 'All'){
				$http.get('/api/events').success(function(data, status, headers, config){
					$scope.events = data;
					$scope.yearEventCount = $scope.events.length;
					$scope.year = year;
				})
			}
			else {
				$http.get('/api/events/'+year).success(function(data, status, headers, config){
					$scope.events = data;
					$scope.yearEventCount = $scope.events.length;
					$scope.year = year;
				})
			}
		}
		$scope.showModal = function (id){
			var selector = "#"+id;
			$(selector).modal('show');
		}
		$scope.deleteEvent = function(id){
		    var current = "."+id;
		    if(confirm("Are you sure you want to delete this event?")==true){
				$http.delete('api/events/'+id)
					.success(function(data){
						$(current).fadeOut("fast");
						$scope.eventCount--;
						$scope.yearEventCount--;
				})
			}
		}
		$scope.logout = function() {
			authenticationService.logout().then(function (result) {
				$scope.userInfo = null;
				$location.path("/login");
			}, function (error) {
				console.log(error);
			});
		}
	})
	.controller("addEventCtrl",function ($scope, $http, $location){
		window.scrollTo(0,0);
		$('#editor').wysiwyg();
		$('#editor').cleanHtml();
		$('#editor2').wysiwyg();
		$('#editor2').cleanHtml();
		$('#editor3').wysiwyg();
		$('#editor3').cleanHtml();
		$scope.form = {};
		$scope.form.date = {};
		$scope.form.eventTime = {};
		$scope.form.registration = {};
		$scope.form.registration.date = {};
		if($('#external').prop('checked') == true) $('#externalLink').prop('disabled', false);
		else $('#externalLink').prop('disabled', true);
		(function(){
		    $scope.form.date.full = new Date();
		    $scope.form.registration.date.full = new Date();
		})();
		$('#internal, #external').click(function(){
			if($('#external').prop('checked') == true) $('#externalLink').prop('disabled', false);
			else $('#externalLink').prop('disabled', true);
		})
		$scope.submitEvent = function () {
			$scope.form.eventType = $('input[name=eventType]:checked', 'form').val();
			if ($scope.form.eventType == "internal"){
				$scope.form.externalLink = "";
			}
			if($scope.form.date.full || $scope.form.registration.date.full){
				var monthArr = ["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				if($scope.form.date.full){
					$scope.form.date.string = weekdayArr[$scope.form.date.full.getDay()] +", "+monthArr[$scope.form.date.full.getMonth()]+" "+$scope.form.date.full.getDate()+", "+$scope.form.date.full.getFullYear();
					$scope.form.date.full = new Date($scope.form.date.string + ' 11:59:59 PM');
					$scope.form.year = $scope.form.date.full.getFullYear();
				}
				if($scope.form.registration.date.full){
					$scope.form.registration.date.string = weekdayArr[$scope.form.registration.date.full.getDay()] +", "+monthArr[$scope.form.registration.date.full.getMonth()]+" "+$scope.form.registration.date.full.getDate()+", "+$scope.form.registration.date.full.getFullYear();	
					$scope.form.registration.date.full = new Date($scope.form.registration.date.string + ' 11:59:59 PM');
				}
			}
			if($scope.form.registration.url != undefined){
				if ($scope.form.registration.url.substring(0,4) != "http") $scope.form.registration.url = "http://"+$scope.form.registration.url;
			}
			if($scope.form.sponsors!=undefined) $scope.form.sponsors = $scope.form.sponsors.split(/, */);

			if ($('#editor') !=undefined){
				$scope.form.description = $('#editor').html();
			}
			if($scope.form.eventTime.full){
				var hours = $scope.form.eventTime.full.getHours();
				var minutes = $scope.form.eventTime.full.getMinutes();
				var AMPM = hours >= 12 ? 'PM' : 'AM';
				hours = hours % 12;
				hours = hours ? hours : 12;
				minutes = minutes < 10 ? '0'+minutes : minutes;
				$scope.form.eventTime.string = hours + ':' + minutes + ' ' + AMPM;
				$scope.form.date.full = new Date($scope.form.date.string + ' ' +$scope.form.eventTime.string);
			}
			if ($('#editor2') !=undefined && $('#editor2').html() != ""){
				if ($('#editor2').html().match(/<img src=/)!=null){
					$scope.form.banner = $('#editor2').html();
				}
				else {
					$scope.form.banner = "<img src='"+$('#editor2').html().replace(/(\s*|<.+>)/g, '')+"'>";
				}
			}
			else $scope.form.banner = "<img src='img/Cal-Asia-Asia-Globe.jpg'>";
			$scope.form.past = new Date > $scope.form.date.full;
			$http.post('/api/events/new', $scope.form).
			  success(function(data) {
			  	alert("event added");
			  	$location.path('/adminEvent');
			  });
		};
	})
	.controller("editEventCtrl", function ($scope, $http, $location, $routeParams){
		window.scrollTo(0,0);
		$('#editor').wysiwyg();
		$('#editor').cleanHtml();
		$('#editor2').wysiwyg();
		$('#editor2').cleanHtml();
		$('#editor3').wysiwyg();
		$('#editor3').cleanHtml();
		$('#internal, #external').click(function(){
			if($('#external').prop('checked') == true) $('#externalLink').prop('disabled', false);
		    else $('#externalLink').prop('disabled', true);
		})
		$scope.form = {};
		$scope.form.date = {};
		$scope.form.eventTime = {};
		$scope.form.registration = {};
		$scope.form.registration.date = {};
		$http.get('/api/event/' + $routeParams.id).
		success(function(data) {
			$scope.form = data.event;
			if($scope.form.description != undefined) $('#editor').append($scope.form.description);
			if($scope.form.banner != undefined) $('#editor2').append($scope.form.banner);
			if($scope.form.sponsors!=undefined) $scope.form.sponsors = $scope.form.sponsors.join(", ");
			if($scope.form.date != undefined) $scope.form.date.full = new Date($scope.form.date.full);
			else $scope.form.date = {};
			if($scope.form.eventTime != undefined) $scope.form.eventTime.full = new Date($scope.form.eventTime.full);
			else $scope.form.eventTime = {};
			if($scope.form.registration !=undefined) $scope.form.registration.date.full = new Date($scope.form.registration.date.full);
			else $scope.form.registration = {};
			$(':radio[value='+$scope.form.eventType+']').prop('checked',true);
			if($('#external').prop('checked') == true) $('#externalLink').prop('disabled', false);
			else $('#externalLink').prop('disabled', true);
		});
		
		$scope.submitEvent = function () {
			$scope.form.eventType = $('input[name=eventType]:checked', 'form').val();
			if ($scope.form.eventType == "internal"){
				$scope.form.externalLink = "";
			}
			if($scope.form.date.full || $scope.form.registration.date.full){
				var monthArr = ["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				if($scope.form.date.full){
					$scope.form.date.string = weekdayArr[$scope.form.date.full.getDay()] +", "+monthArr[$scope.form.date.full.getMonth()]+" "+$scope.form.date.full.getDate()+", "+$scope.form.date.full.getFullYear();
					$scope.form.date.full = new Date($scope.form.date.string + ' 11:59:59 PM');
					$scope.form.year = $scope.form.date.full.getFullYear();
				}
				if($scope.form.registration.date.full){
					$scope.form.registration.date.string = weekdayArr[$scope.form.registration.date.full.getDay()] +", "+monthArr[$scope.form.registration.date.full.getMonth()]+" "+$scope.form.registration.date.full.getDate()+", "+$scope.form.registration.date.full.getFullYear();	
					$scope.form.registration.date.full = new Date($scope.form.registration.date.string + ' 11:59:59 PM');
				}
			}
			if($scope.form.registration.url != undefined){
				if ($scope.form.registration.url.substring(0,4) != "http") $scope.form.registration.url = "http://"+$scope.form.registration.url;
			}
			if($scope.form.sponsors!=undefined) $scope.form.sponsors = $scope.form.sponsors.split(/, */);

			if ($('#editor') !=undefined){
				$scope.form.description = $('#editor').html();
			}
			if($scope.form.eventTime.full){
				var hours = $scope.form.eventTime.full.getHours();
				var minutes = $scope.form.eventTime.full.getMinutes();
				var AMPM = hours >= 12 ? 'PM' : 'AM';
				hours = hours % 12;
				hours = hours ? hours : 12;
				minutes = minutes < 10 ? '0'+minutes : minutes;
				$scope.form.eventTime.string = hours + ':' + minutes + ' ' + AMPM;
				$scope.form.date.full = new Date($scope.form.date.string + ' ' +$scope.form.eventTime.string);
			}
			if ($('#editor2')!=undefined && $('#editor2').html() != ""){
				if ($('#editor2').html().match(/<img src=/)!=null){
					$scope.form.banner = $('#editor2').html();
				}
				else {
					$scope.form.banner = "<img src='"+$('#editor2').html().replace(/(\s*|<.+>)/g, '')+"'>";
				}
			}
			else $scope.form.banner = "<img src='img/Cal-Asia-Asia-Globe.jpg'>";
			$scope.form.past = new Date > $scope.form.date.full;
			$http.put('/api/event/' + $routeParams.id, $scope.form).
				success(function(data) {
					$location.url('/adminEvent');
				});
		};
	})
	.controller('adminUpdateCtrl', function ($scope, $filter, $http, $location, authenticationService) {
		window.scrollTo(0,0);
		$http.get('/api/updates').success(function(data, status, headers, config){
			$scope.updates = data;
			$scope.updateCount = $scope.updates.length;
		})
		$scope.deleteUpdate = function(id){
		    var current = "."+id;
		    if(confirm("Are you sure you want to delete this update?")==true){
		      $http.delete('api/updates/'+id)
		        .success(function(data){
					$(current).fadeOut("fast");
					$scope.updateCount--;
		        })
		    }
		}
		$scope.logout = function() {
			authenticationService.logout().then(function (result) {
				$scope.userInfo = null;
				$location.path("/login");
			}, function (error) {
				console.log(error);
			});
		}
	})
	.controller("addUpdateCtrl",function ($scope, $http, $location){
		window.scrollTo(0,0);
		$('#editor').wysiwyg();
		$('#editor').cleanHtml();
		$scope.form = {};
		$scope.form.date = {};
		$scope.submitUpdate = function () {
			if($scope.form.date.full){
				var monthArr = ["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				$scope.form.date.string = weekdayArr[$scope.form.date.full.getDay()] +", "+monthArr[$scope.form.date.full.getMonth()]+" "+$scope.form.date.full.getDate()+", "+$scope.form.date.full.getFullYear();
				$scope.form.year = $scope.form.date.full.getFullYear();
			}
			if ($('#editor') !=undefined){
				$scope.form.description = $('#editor').html();
			}
			$http.post('/api/updates/new', $scope.form).
			  success(function(data) {
			  	alert("Update added");
			  	$location.path('/adminUpdate');
			});
		};
	})
	.controller("editUpdateCtrl", function ($scope, $http, $location, $routeParams){
		window.scrollTo(0,0);
		$('#editor').wysiwyg();
		$('#editor').cleanHtml();
		$scope.form = {};
		$scope.form.date = {};
		$http.get('/api/update/' + $routeParams.id).
		success(function(data) {
			$scope.form = data.update;
			if($scope.form.description != undefined) $('#editor').append($scope.form.description);
			if($scope.form.date != undefined){
				if($scope.form.date.full != undefined){
					$scope.form.date.full = new Date($scope.form.date.full);
				}
			}
			else $scope.form.date = {};
		});
		
		$scope.submitUpdate = function () {
			if($scope.form.date.full){
				var monthArr = ["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				$scope.form.date.string = weekdayArr[$scope.form.date.full.getDay()] +", "+monthArr[$scope.form.date.full.getMonth()]+" "+$scope.form.date.full.getDate()+", "+$scope.form.date.full.getFullYear();
				$scope.form.year = $scope.form.date.full.getFullYear();
			}
			else {
				$scope.form.date.string = null;
				$scope.form.year = null;
			}
			if ($('#editor') !=undefined){
				$scope.form.description = $('#editor').html();
			}
			$http.put('/api/update/' + $routeParams.id, $scope.form).
				success(function(data) {
					$location.url('/adminUpdate');
				});
		};
	})
	.controller('adminBlogCtrl', function ($scope, $filter, $http, $location, authenticationService) {
		window.scrollTo(0,0);
		$http.get('/api/blogs').success(function(data, status, headers, config){
			$scope.blogs = data;
			$scope.blogCount = $scope.blogs.length;
		})
		$scope.showModal = function (id){
			var selector = "#"+id;
			$(selector).modal('show');
		}
		$scope.deleteBlog = function(id){
			var current = "."+id;
			if(confirm("Are you sure you want to delete this blog entry?")==true){
				$http.delete('api/blogs/'+id)
				.success(function(data){
					$(current).fadeOut("fast");
					$scope.blogCount--;
				})
			}
		}
		$scope.logout = function() {
			authenticationService.logout().then(function (result) {
				$scope.userInfo = null;
				$location.path("/login");
			}, function (error) {
				console.log(error);
			});
		}
	})
	.controller("addBlogCtrl",function ($scope, $http, $location){
		window.scrollTo(0,0);
		$('#editor').wysiwyg();
		$('#editor').cleanHtml();
		$scope.form = {};
		$scope.form.date = {};
		$scope.submitBlog = function () {
			if($scope.form.date.full){
				var monthArr = ["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				$scope.form.date.string = weekdayArr[$scope.form.date.full.getDay()] +", "+monthArr[$scope.form.date.full.getMonth()]+" "+$scope.form.date.full.getDate()+", "+$scope.form.date.full.getFullYear();
				$scope.form.year = $scope.form.date.full.getFullYear();
			}
			if ($('#editor') !=undefined){
				$scope.form.text = $('#editor').html();
			}
			$http.post('/api/blogs/new', $scope.form).
			  success(function(data) {
			  	alert("Blog added");
			  	$location.path('/adminBlog');
			});
		};
	})
	.controller("editBlogCtrl", function ($scope, $http, $location, $routeParams){
		window.scrollTo(0,0);
		$('#editor').wysiwyg();
		$('#editor').cleanHtml();
		$scope.form = {};
		$scope.form.date = {};
		$http.get('/api/blog/' + $routeParams.id).
		success(function(data) {
			$scope.form = data.blog;
			if($scope.form.text != undefined) $('#editor').append($scope.form.text);
			if($scope.form.date != undefined){
				if($scope.form.date.full != undefined){
					$scope.form.date.full = new Date($scope.form.date.full);
				}
			}
			else $scope.form.date = {};
		});
		$scope.submitBlog = function () {
			if($scope.form.date.full){
				var monthArr = ["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				$scope.form.date.string = weekdayArr[$scope.form.date.full.getDay()] +", "+monthArr[$scope.form.date.full.getMonth()]+" "+$scope.form.date.full.getDate()+", "+$scope.form.date.full.getFullYear();
				$scope.form.year = $scope.form.date.full.getFullYear();
			}
			else {
				$scope.form.date.string = null;
				$scope.form.year = null;
			}
			if ($('#editor') !=undefined){
				$scope.form.text = $('#editor').html();
			}
			$http.put('/api/blog/' + $routeParams.id, $scope.form).
				success(function(data) {
					$location.url('/adminBlog');
				});
		};
	})
	.controller('adminBoardCtrl', function ($scope, $filter, $http, $location, authenticationService) {
		window.scrollTo(0,0);
		$http.get('/api/board').success(function(data, status, headers, config){
			$scope.board = data;
			$scope.boardCount = $scope.board.length;
			$scope.board.forEach(function(member, i){
				if(member.image.length>0) member.image = member.image.slice(9, member.image.length-1);
				else member.image = '../img/default-profile.jpg';
			});
		})
		$scope.showModal = function (id){
			var selector = "#"+id;
			$(selector).modal('show');
		}
		$scope.deleteBoard = function(id){
			var current = "."+id;
			if(confirm("Are you sure you want to delete this board member?")==true){
				$http.delete('api/board/'+id)
				.success(function(data){
					$(current).fadeOut("fast");
					$scope.boardCount--;
				})
			}
		}
		$scope.logout = function() {
			authenticationService.logout().then(function (result) {
				$scope.userInfo = null;
				$location.path("/login");
			}, function (error) {
				console.log(error);
			});
		}
	})
	.controller("addBoardCtrl",function ($scope, $http, $location){
		window.scrollTo(0,0);
		$('#editor').wysiwyg();
		$('#editor').cleanHtml();
		$('#editor2').wysiwyg({toolbarSelector: '[data-role=editor-toolbar2]'});
		$('#editor2').cleanHtml();
		$scope.form = {company:{},type:[]};
		$scope.submitBoard = function () {
			for (var i=0;i<$('input[name=boardType]:checked', 'form').length;i++){
				$scope.form.type.push($('input[name=boardType]:checked:eq('+i+')', 'form').val());
			}
			if ($('#editor') !=undefined){
				$scope.form.bio = $('#editor').html();
			}
			if ($('#editor2') !=undefined){
				$scope.form.image = $('#editor2').html();
			}
			$http.post('/api/board/new', $scope.form).
				success(function(data) {
					alert("Board member added");
					$location.path('/adminBoard');
				});
		};
	})
	.controller("editBoardCtrl", function ($scope, $http, $location, $routeParams){
		window.scrollTo(0,0);
		$('#editor').wysiwyg();
		$('#editor').cleanHtml();
		$('#editor2').wysiwyg({toolbarSelector: '[data-role=editor-toolbar2]'});
		$('#editor2').cleanHtml();
		$http.get('/api/board/' + $routeParams.id).
		success(function(data) {
			$scope.form = data.member;
			$scope.form.type.forEach(function(type,i){
				$(':checkbox[value='+type+']').prop('checked',true);
			})
			if(data.member.company==undefined) $scope.form.company = {};
			if($scope.form.bio != undefined) $('#editor').append($scope.form.bio);
			if($scope.form.image != undefined) $('#editor2').append($scope.form.image);
		});
		$scope.submitBoard = function () {
			$scope.form.type=[];
			for (var i=0;i<$('input[name=boardType]:checked', 'form').length;i++){
				$scope.form.type.push($('input[name=boardType]:checked:eq('+i+')', 'form').val());
			}
			if ($('#editor') !=undefined){
				$scope.form.bio = $('#editor').html();
			}
			if ($('#editor2') !=undefined){
				$scope.form.image = $('#editor2').html();
			}
			$http.put('/api/board/' + $routeParams.id, $scope.form).
				success(function(data) {
					$location.url('/adminBoard');
				});
		};
	})
	.controller('adminContentCtrl', function ($scope, $filter, $http, $location, authenticationService) {
		window.scrollTo(0,0);
		$http.get('/api/pageContent/home').success(function(data, status, headers, config){
			$scope.home = data;
		})
		$http.get('/api/pageContent/programs').success(function(data, status, headers, config){
			$scope.programs = data;
		})
		$http.get('/api/pageContent/membership').success(function(data, status, headers, config){
			$scope.membership = data;
		})
		$http.get('/api/pageContent/resources').success(function(data, status, headers, config){
			$scope.resources = data;
		})
		$http.get('/api/pageContent/about').success(function(data, status, headers, config){
			$scope.about = data;
		})
		$scope.deleteContent = function(id){
			var current = "."+id;
			if(confirm("Are you sure you want to delete this content?")==true){
				$http.delete('api/content/'+id)
				.success(function(data){
					$(current).fadeOut("fast");
				})
			}
		}
		$scope.logout = function() {
			authenticationService.logout().then(function (result) {
				$scope.userInfo = null;
				$location.path("/login");
			}, function (error) {
				console.log(error);
			});
		}
	})
	.controller("addContentCtrl",function ($scope, $http, $location){
		window.scrollTo(0,0);
		$('#editor').wysiwyg();
		$('#editor').cleanHtml();
		$('#editor2').wysiwyg({toolbarSelector: '[data-role=editor-toolbar2]'});
		$('#editor2').cleanHtml();
		$scope.form = {};
		$scope.submitContent = function () {
			$scope.form.page = $('input[name=pageType]:checked', 'form').val();
			if ($('#editor') !=undefined){
				$scope.form.text = $('#editor').html();
			}
			if ($('#editor2') !=undefined){
				if ($('#editor2').html().match(/<img src=/)!=null){
					$scope.form.image = $('#editor2').html();
				}
				else {
					$scope.form.image = "<img src='"+$('#editor2').html().replace(/(\s*|<.+>)/g, '')+"'>";
				}
			}
			$http.post('/api/content/new', $scope.form).
				success(function(data) {
					alert("New content added");
					$location.path('/adminContent');
				});
		};
	})
	.controller("editContentCtrl", function ($scope, $http, $location, $routeParams){
		window.scrollTo(0,0);
		$('#editor').wysiwyg();
		$('#editor').cleanHtml();
		$('#editor2').wysiwyg({toolbarSelector: '[data-role=editor-toolbar2]'});
		$('#editor2').cleanHtml();
		$scope.form={};
		$http.get('/api/content/' + $routeParams.id).success(function(data) {
			$scope.form = data.content;
			$(':radio[value='+$scope.form.page+']').prop('checked',true)
			if($scope.form.text != undefined) $('#editor').append($scope.form.text);
			if($scope.form.image != undefined) $('#editor2').append($scope.form.image);
		});
		$scope.submitContent = function () {
			$scope.form.page = $('input[name=pageType]:checked', 'form').val();
			if ($('#editor') !=undefined){
				$scope.form.text = $('#editor').html();
			}
			if ($('#editor2') !=undefined){
				if ($('#editor2').html().match(/<img src=/)!=null){
					$scope.form.image = $('#editor2').html();
				}
				else {
					$scope.form.image = "<img src='"+$('#editor2').html().replace(/(\s*|<.+>)/g, '')+"'>";
				}
			}
			$http.put('/api/content/' + $routeParams.id, $scope.form).
				success(function(data) {
					$location.url('/adminContent');
				});
		};
	})
	.controller('adminCarouselCtrl', function ($scope, $filter, $http, $location, authenticationService) {
		window.scrollTo(0,0);
		$('#success').css("opacity",0);
		var N;
		$http.get('/api/carousel').success(function(data, status, headers, config){
			$scope.items = data;
			$scope.carouselCount = $scope.items.length;
			N = $scope.items.length;
		})
		$scope.addItem = function(){
			N++;
			$http.post('/api/carousel/new', {order:N, title:"", text:"", img:""}).
			success(function(data) {
				$scope.items.push(data);
				$scope.carouselCount++;
			});
		}
		$scope.saveOrder = function(){
			$scope.items.forEach(function(item, i){
				$http.put('/api/carousel/' + item._id, item).success(function(data) {
					if (i = $scope.items.length-1){
						$('#success').css("opacity",1);
						window.setTimeout(function(){
							$('#success').css("opacity",0);
						}, 2000);
					}
				});
			})
		}
		$scope.deleteItem = function(id){
		    var current = "#"+id;
		    if(confirm("Are you sure you want to delete this item?")==true){
		      $http.delete('api/carousel/'+id)
		        .success(function(data){
					$(current).fadeOut("fast");
					$scope.carouselCount--;
					N--;
		        })
		    }
		}
		$scope.logout = function() {
			authenticationService.logout().then(function (result) {
				$scope.userInfo = null;
				$location.path("/login");
			}, function (error) {
				console.log(error);
			});
		}
	})
	.controller("editCarouselCtrl", function ($scope, $http, $location, $routeParams){
		window.scrollTo(0,0);
		$('#editor').wysiwyg();
		$('#editor').cleanHtml();
		$('#editor2').wysiwyg({toolbarSelector: '[data-role=editor-toolbar2]'});
		$('#editor2').cleanHtml();
		$scope.form = {};
		$http.get('/api/carousel/' + $routeParams.id).
		success(function(data) {
			$scope.form = data.carousel;
			if($scope.form.text != undefined) $('#editor').append($scope.form.text);
			if($scope.form.image != undefined) $('#editor2').append($scope.form.image);
		});
		$scope.submitItem = function () {
			if ($('#editor') !=undefined){
				$scope.form.text = $('#editor').html();
			}
			if ($('#editor2') !=undefined){
				if ($('#editor2').html().match(/<img src=/)!=null){
					$scope.form.image = $('#editor2').html();
				}
				else {
					$scope.form.image = "<img src='"+$('#editor2').html().replace(/(\s*|<.+>)/g, '')+"'>";
				}
			}
			$http.put('/api/carousel/' + $routeParams.id, $scope.form).
				success(function(data) {
					$location.url('/adminCarousel');
				});
		};
	})
	.controller("adminCtrl", function ($scope, $http, $timeout, $location, authenticationService){
		window.scrollTo(0,0);
		$http.get('/api/carousel').success(function(data, status, headers, config){
			$scope.carouselCount = data.length;
		})
		$http.get('/api/events').success(function(data, status, headers, config){
			$scope.eventCount = data.length;
		})
		$http.get('/api/updates').success(function(data, status, headers, config){
			$scope.updateCount = data.length;
		})
		$http.get('/api/blogs').success(function(data, status, headers, config){
			$scope.blogCount = data.length;
		})
		$http.get('/api/board').success(function(data, status, headers, config){
			$scope.boardCount = data.length;
		})
		$scope.logout = function() {
			authenticationService.logout().then(function (result) {
				$scope.userInfo = null;
				$location.path("/login");
			}, function (error) {
				console.log(error);
			});
		}
	})
	.controller("loginCtrl", function ($scope,$location,$window,authenticationService){
		window.scrollTo(0,0);
		$scope.userInfo = null;
		$scope.login = function () {
			authenticationService.login($scope.userName, $scope.password)
			.then(function (result) {
				$scope.userInfo = result;
				$location.path("/admin");
			}, function (error) {
				console.log(error);
				$window.alert("Invalid Credentials");
				console.log(error);
				});
		};
		$scope.clear = function(){
			$scope.userName = "";
			$scope.password = "";
		};
	})
	.directive('carouselFirstActive', function() {
        return function(scope, element, attrs) {
            if (scope.$first) setTimeout(function(){
                scope.$emit('onRepeatFirst', element, attrs);
            }, 1);
        };
    })
	.directive('showDuringResolve',function($rootScope){
		return{
			link: function(scope,element){
				element.css('display','none');
				var unregister = $rootScope.$on('$routeChangeStart',function(){
					element.css('display', 'block');
				});
				scope.$on('$destroy',unregister);
			}
		};
	})
	.directive('loading', function ($http, $timeout){
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if(v){
                        elm.show();
                    }else{
                       	elm.hide();
                    }
                });
            }
        };
    })
	.factory("authenticationService", function ($http, $q, $window){
		var userInfo;
		function login(userName, password){
			var deferred = $q.defer();
			$http.post("/api/login", {
				userName:userName,
				password:password
			}).then(function(result){
				userInfo={
					accessToken: result.data.access_token,
					userName:result.data.userName
				};
				$window.sessionStorage["userInfo"]=JSON.stringify(userInfo);
				deferred.resolve(userInfo);
			}, function (error){
				deferred.reject(error);
			});
			return deferred.promise;
		};
		function logout(){
			var deferred = $q.defer();
			$http({
				method:"POST",
				url:"/api/logout",
				headers:{
					"access_token": userInfo.accessToken
				}
			}).then(function(result) {
				$window.sessionStorage["userInfo"] = null;
				userInfo = null;
				deferred.resolve(result);
			}, function (error) {
				deferred.reject(error);
			});
			return deferred.promise;
		}

		function getUserInfo() {
			return userInfo;
		}
		function init(){
			if ($window.sessionStorage["userInfo"]) {
				userInfo = JSON.parse($window.sessionStorage["userInfo"]);
			}
		}
		init();
		return {
			login: login,
			logout: logout,
			getUserInfo: getUserInfo
		};
	})
	.run(["$rootScope", "$location", function ($rootScope, $location) {
		$rootScope.page = {
			setTitle: function(title){
				this.title=title + ' | California-Asia Business Council';
			},
			setDescription: function(text){
				this.description=text;
			}
		}
		$rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
			// console.log(userInfo);
			$rootScope.page.setTitle(current.$$route.title || 'California-Asia Business Council');
			$rootScope.page.setDescription(current.$$route.description || 'Cal-Asia\'s mission is to foster business between California and the economies of Asia');
			$('.modal-open').css('padding',0).removeClass('modal-open');
			$('.navbar-collapse li').click(function(){
				if ($(this).find('.dropdown-menu').length>0) return;
				else $('.navbar-collapse').collapse('hide');
			})
		});
		$rootScope.$on("$routeChangeError", function (event, current, previous, eventObj) {
			if (eventObj.authenticated === false) {
				$location.path("/login");
			}
		});
	}]);
//var editorString ='<div class="btn-toolbar" data-role="editor-toolbar" data-target=".editor"><div class="btn-group"><a class="btn btn-default dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Font"><i class="glyphicon glyphicon-font"></i><b class="caret"></b></a><ul class="dropdown-menu"><li><a data-edit="fontName Serif" style="font-family:\'Serif\'">Serif</a></li><li><a data-edit="fontName Sans" style="font-family:\'Sans\'">Sans</a></li><li><a data-edit="fontName Arial" style="font-family:\'Arial\'">Arial</a></li><li><a data-edit="fontName Arial Black" style="font-family:\'Arial Black\'">Arial Black</a></li><li><a data-edit="fontName Courier" style="font-family:\'Courier\'">Courier</a></li><li><a data-edit="fontName Courier New" style="font-family:\'Courier New\'">Courier New</a></li><li><a data-edit="fontName Comic Sans MS" style="font-family:\'Comic Sans MS\'">Comic Sans MS</a></li><li><a data-edit="fontName Helvetica" style="font-family:\'Helvetica\'">Helvetica</a></li><li><a data-edit="fontName Impact" style="font-family:\'Impact\'">Impact</a></li><li><a data-edit="fontName Lucida Grande" style="font-family:\'Lucida Grande\'">Lucida Grande</a></li><li><a data-edit="fontName Lucida Sans" style="font-family:\'Lucida Sans\'">Lucida Sans</a></li><li><a data-edit="fontName Tahoma" style="font-family:\'Tahoma\'">Tahoma</a></li><li><a data-edit="fontName Times" style="font-family:\'Times\'">Times</a></li><li><a data-edit="fontName Times New Roman" style="font-family:\'Times New Roman\'">Times New Roman</a></li><li><a data-edit="fontName Verdana" style="font-family:\'Verdana\'">Verdana</a></li></ul></div><div class="btn-group"><a class="btn btn-default dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Font Size"><i class="glyphicon glyphicon-text-height"></i>&nbsp;<b class="caret"></b></a><ul class="dropdown-menu"><li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li><li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li><li><a data-edit="fontSize 1"><font size="1">Small</font></a></li></ul></div><div class="btn-group"><a class="btn btn-default" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a><a class="btn btn-default" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a><a class="btn btn-default" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a></div><div class="btn-group"><a class="btn btn-default" data-edit="insertunorderedlist" title="" data-original-title="Bullet list"><i class="glyphicon glyphicon-list"></i></a><a class="btn btn-default" data-edit="insertorderedlist" title="" data-original-title="Number list"><i class="glyphicon glyphicon-list-alt"></i></a><a class="btn btn-default" data-edit="outdent" title="" data-original-title="Reduce indent (Shift+Tab)"><i class="glyphicon glyphicon-indent-left"></i></a><a class="btn btn-default" data-edit="indent" title="" data-original-title="Indent (Tab)"><i class="glyphicon glyphicon-indent-right"></i></a></div><div class="btn-group"><a class="btn btn-default" data-edit="justifyleft" title="" data-original-title="Align Left (Ctrl/Cmd+L)"><i class="glyphicon glyphicon-align-left"></i></a><a class="btn btn-default" data-edit="justifycenter" title="" data-original-title="Center (Ctrl/Cmd+E)"><i class="glyphicon glyphicon-align-center"></i></a><a class="btn btn-default" data-edit="justifyright" title="" data-original-title="Align Right (Ctrl/Cmd+R)"><i class="glyphicon glyphicon-align-right"></i></a><a class="btn btn-default" data-edit="justifyfull" title="" data-original-title="Justify (Ctrl/Cmd+J)"><i class="glyphicon glyphicon-align-justify"></i></a></div><div class="btn-group"><a class="btn btn-default dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a><div class="dropdown-menu input-append"><input class="span2" placeholder="URL" type="text" data-edit="createLink"><button class="btn" type="button">Add</button></div><a class="btn btn-default" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a></div><div class="btn-group"><a class="btn btn-default" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a><input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;"></div><div class="btn-group"><a class="btn btn-default" data-edit="undo" title="" data-original-title="Undo (Ctrl/Cmd+Z)"><i class="glyphicon glyphicon-backward"></i></a><a class="btn btn-default" data-edit="redo" title="" data-original-title="Redo (Ctrl/Cmd+Y)"><i class="glyphicon glyphicon-forward"></i></a></div></div>';
//var editorString = '<div class="btn-toolbar" data-role="editor-toolbar" data-target="#editor"><div class="btn-group"><a class="btn dropdown-toggle" data-toggle="dropdown" title="Font"><i class="icon-font"></i><b class="caret"></b></a><ul class="dropdown-menu"></ul></div><div class="btn-group"><a class="btn dropdown-toggle" data-toggle="dropdown" title="Font Size"><i class="icon-text-height"></i>&nbsp;<b class="caret"></b></a><ul class="dropdown-menu"><li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li><li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li><li><a data-edit="fontSize 1"><font size="1">Small</font></a></li></ul></div><div class="btn-group"><a class="btn" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="icon-bold"></i></a><a class="btn" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="icon-italic"></i></a><a class="btn" data-edit="strikethrough" title="Strikethrough"><i class="icon-strikethrough"></i></a><a class="btn" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="icon-underline"></i></a></div><div class="btn-group"><a class="btn" data-edit="insertunorderedlist" title="Bullet list"><i class="icon-list-ul"></i></a><a class="btn" data-edit="insertorderedlist" title="Number list"><i class="icon-list-ol"></i></a><a class="btn" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="icon-indent-left"></i></a><a class="btn" data-edit="indent" title="Indent (Tab)"><i class="icon-indent-right"></i></a></div><div class="btn-group"><a class="btn" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="icon-align-left"></i></a><a class="btn" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="icon-align-center"></i></a><a class="btn" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="icon-align-right"></i></a><a class="btn" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="icon-align-justify"></i></a></div><div class="btn-group"><a class="btn dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="icon-link"></i></a><div class="dropdown-menu input-append"><input class="span2" placeholder="URL" type="text" data-edit="createLink"/><button class="btn" type="button">Add</button></div><a class="btn" data-edit="unlink" title="Remove Hyperlink"><i class="icon-cut"></i></a></div><div class="btn-group"><a class="btn" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="icon-picture"></i></a><input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" /></div><div class="btn-group"><a class="btn" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="icon-undo"></i></a><a class="btn" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="icon-repeat"></i></a></div><input type="text" data-edit="inserttext" id="voiceBtn" x-webkit-speech=""></div>'
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
	/* var data = dateString.split("-");
	var month = (parseInt(data[1])-1).toString();*/
  return  new Date(dateString);
}

$('.extLink').find('span').css('opacity', 0);
$('.extLink').hover(function(){
	$(this).find('span').css('opacity', 1);
}, function(){
	$(this).find('span').css('opacity', 0);
})