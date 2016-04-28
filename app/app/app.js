angular.module('PortfolioApp', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: "app/views/home.html"
	}).when('/hilux-parallax',{
		templateUrl: "app/views/hilux_parallax.html"
	});
});