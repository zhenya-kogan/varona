'use strict';

var Vrn = angular.module('Vrn', [
    'ngRoute',
    'ngSanitize'
]);

Vrn.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: '/partials/home.html',
			controller: 'HomeCtrl'
		})
		.when('/music', {
			templateUrl: '/partials/music.html',
			controller: 'MusicCtrl'
		})
		.when('/shows', {
			templateUrl: '/partials/shows.html',
			controller: 'ShowsCtrl'
		})
		.when('/videos', {
			templateUrl: '/partials/videos.html',
			controller: 'VideosCtrl'
		})
		.when('/videos/:videoId', {
			templateUrl: '/partials/video.html',
			controller: 'VideoCtrl'
		})
		.when('/photos', {
			templateUrl: '/partials/photos.html',
			controller: 'PhotosCtrl'
		})
		.when('/about', {
			templateUrl: '/partials/about.html',
			controller: 'AboutCtrl'
		})
		/*.when('/connect', {
			templateUrl: '/partials/connect.html',
			controller: 'ConnectCtrl'
		})*/
		.when('/links', {
			templateUrl: '/partials/links.html',
			controller: 'MusicWeLikeCtrl'
		})
		.when('/#!/music', {
			templateUrl: '/partials/music.html',
			controller: 'MusicCtrl'
		})
		.when('/#!/shows', {
			templateUrl: '/partials/shows.html',
			controller: 'ShowsCtrl'
		})
		.when('/#!/videos', {
			templateUrl: '/partials/videos.html',
			controller: 'VideosCtrl'
		})
		.when('/#!/videos/:videoId', {
			templateUrl: '/partials/video.html',
			controller: 'VideoCtrl'
		})
		.when('/#!/photos', {
			templateUrl: '/partials/photos.html',
			controller: 'PhotosCtrl'
		})
		.when('/#!/about', {
			templateUrl: '/partials/about.html',
			controller: 'AboutCtrl'
		})
		/*.when('/#!/connect', {
			templateUrl: '/partials/connect.html',
			controller: 'ConnectCtrl'
		})*/
		.when('/#!/links', {
			templateUrl: '/partials/links.html',
			controller: 'MusicWeLikeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);
	history.pushState({}, "entry page", location.hash.substring(1));

}]);

