'use strict';

var VaronaControllers = angular.module('VaronaControllers', []);

VaronaControllers.controller('ShowsCtrl', ['$scope', '$http',
function($scope, $http) {
    $http.get('/json/shows.json')
        .success(function(data) {
            $scope.shows = data.shows;
			console.log($scope.shows);
        });
}]);
