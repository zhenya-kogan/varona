'use strict';

Vrn.value('Pages', {
	home: {
		name: "home",
		class: "homePage",
		path: "/",
		skipMenu: true,
		showOnMobile: true,
		backgrounds: [{
			url: "/images/bg-manHouse.png",
			position: "right bottom"
		},
		{
			url: "/images/bg-fishFlower.png",
			position: "left bottom"
		}]
	},
	music: {
		name: "music",
		class: "musicPage",
		path: "/music",
		backgrounds: [{
			url: "/images/bg-fish.jpg",
			position: "right bottom"
		}]
	},
	videos: {
		name: "videos",
		class: "videosPage",
		path: "/videos"
	},
	video: {
		name: "videos",
		class: "videoPage",
		skipMenu: true
	},
	photos: {
		name: "photos",
		class: "photosPage",
		path: "/photos",
		backgrounds: [{
			url: "/images/bg-birdsBoat.jpg",
			position: "left bottom"
		}]
	},
	shows: {
		name: "shows",
		class: "showsPage",
		path: "/shows",
		backgrounds: [{
			url: "/images/bg-birds.jpg",
			position: "right top"
		}]
	},
	about: {
		name: "about",
		class: "aboutPage",
		path: "/about",
		backgrounds: [{
			//url: "/images/bg-girlsBeast.jpg",
			url: "/images/bg-manShadow.jpg",
			//position: "right bottom"
			position: "left bottom"
		}]
	},
	blog: {
		name: "blog",
		class: "blogPage",
		path: "http://blog.varonaband.com"
	}
	/*connect: {
		name: "connect",
		class: "connectPage",
		path: "/connect",
		backgrounds: [{
			url: "/images/bg-manShadow.jpg",
			position: "left bottom"
		}]
	},*/
	/*links: {
		name: "links",
		class: "linksPage",
		path: "/links",
		backgrounds: [{
			url: "/images/bg-birdsBoat.jpg",
			position: "left bottom"
		}]
	}*/
});

Vrn.controller('MainCtrl', ['$scope', 'Pages', 
function($scope, Pages) {
	$scope.mainNav = {
		path: "/partials/main-nav.html"
	};
	$scope.pages = _.values(Pages);
	$scope.setPage = function(name) {
		$scope.currentPage = Pages[name];
		$scope.showMenu(false);
	};
	$scope.showMenu = function(display) {
		$scope.visibleMenu = display !== undefined ? display : !$scope.visibleMenu;
	};
}]);

Vrn.controller('ShowsCtrl', ['$scope', '$http',
function($scope, $http) {
	$scope.setPage("shows");

	var parseShow = function(show) {

		show.fullAddress = _.values(
			_.omit(show.venue, 'name')
		).join(', ');

		show.allArtists = "{0} {1}".format(
			show.artistRelationship || "",
			_.pluck(show.artists, 'name'));

		return show;
	};

    $http.get('/json/shows.json')
        .success(function(data) {
			$scope.shows = _.map(data.shows, parseShow);
        });
}]);

Vrn.controller('LineUpCtrl', ['$scope', '$http',
function($scope, $http) {
	$http.get('/json/musicians.json')
		.success(function(data) {
			$scope.lineUp = _.where(data.musicians, {current: true});
		});
}]);

Vrn.controller('ReviewsCtrl', ['$scope', '$http',
function($scope, $http) {
	$http.get('/json/reviews.json')
		.success(function(data) {
			$scope.reviews = data.reviews;
		});
}]);

Vrn.controller('PhotosCtrl', ['$scope', '$http',
function($scope, $http) {
	$scope.setPage("photos");
	$http.get('/json/photos.json')
		.success(function(data) {
			$scope.photos = data.photos;
		});
}]);

Vrn.controller('VideosCtrl', ['$scope', '$http',
function($scope, $http) {
	$scope.setPage("videos");
	var apiKey				= 'AIzaSyB6CAnCatf1JOjxIxgQRws8F0UGdIduQSY';
	var channelId			= 'UC7tTRguUEyHHOUbXTvhnXHg';
	var uploadedPlaylistId	= 'UUbW18JZRgko_mOGm5er8Yzg';
	var uploadedPlaylistId	= 'UU7tTRguUEyHHOUbXTvhnXHg';
	var parts				= 'snippet,id';
	var fields				= 'snippet(resourceId/videoId,title,thumbnails/medium)';
	var maxResults			= 50;

	var requestUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?key={0}&playlistId={1}&part={2}&fields=items({3})&maxResults={4}'.format(
		apiKey,
		uploadedPlaylistId,
		parts,
		fields,
		maxResults);
	requestUrl = encodeURI(requestUrl);
	$http.get(requestUrl)
		.success(function(data) {
			$scope.videos = _.map(data.items, function(video) {
				return {
					title: video.snippet.title,
					thumb: video.snippet.thumbnails.medium.url,
					//url: "https://www.youtube.com/watch?v={0}".format(
					url: "http://varonaband.com/videos/{0}".format(
						video.snippet.resourceId.videoId)
				};
			});
		});
}]);

Vrn.controller('VideoCtrl', ['$scope', '$routeParams', '$sce',
function($scope, $routeParams, $sce) {
	$scope.setPage("video");
	$scope.embedUrl = $sce.trustAsResourceUrl('//www.youtube-nocookie.com/embed/{0}'.format(
		$routeParams.videoId));
}]);

Vrn.controller('MusicWeLikeCtrl', ['$scope', '$http',
function($scope, $http) {
	$scope.setPage("links");
	$http.get('/json/musicWeLike.json')
		.success(function(data) {
			$scope.bands = _.sortBy(data.bands, 'name');
		});
}]);

Vrn.controller('HomeCtrl', ['$scope',
function($scope) {
	$scope.setPage("home");
}]);

Vrn.controller('MusicCtrl', ['$scope',
function($scope) {
	$scope.setPage("music");
}]);

Vrn.controller('AboutCtrl', ['$scope',
function($scope) {
	$scope.setPage("about");
}]);

