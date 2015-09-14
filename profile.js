angular.module("formModule", [])

angular.module("formModule").controller("formController", ["$scope", function($scope){

	$scope.username = "enter your name";
	$scope.nickname = "enter your nickname";
	$scope.userLocation = "enter your location";
	$scope.website = "enter your url";
	$scope.intro = "enter your introductory heading";
	$scope.caption1 = "enter a caption for this image";
	$scope.caption2 = "enter a caption for this image";
	$scope.caption3 = "enter a caption for this image";
	$scope.paragraph1 = "enter some information about yourself";
	$scope.paragraph2 = "perhaps a childhood anecdote";
	$scope.paragraph3 = "or something much less personal";
	$scope.paragraph4 = "something entirely boring that inadvertently speaks about who you are as a person";

	$scope.usernameClick = function ($event) {
		$scope.usernameField = true;
	}

	$scope.nicknameClick = function ($event) {
		$scope.nicknameField = true;
	}

	$scope.locationClick = function ($event) {
		$scope.userLocationField = true;
	}

	$scope.websiteClick = function ($event) {
		$scope.websiteField = true;
	}

	$scope.headingClick = function ($event) {
		$scope.introField = true;
	}

	$scope.caption1Click = function ($event) {
		$scope.caption1Field = true;
	}

	$scope.caption2Click = function ($event) {
		$scope.caption2Field = true;
	}

	$scope.caption3Click = function ($event) {
		$scope.caption3Field = true;
	}

	$scope.paragraph1Click = function ($event) {
		$scope.paragraph1Field = true;
	}

	$scope.paragraph2Click = function ($event) {
		$scope.paragraph2Field = true;
	}

	$scope.paragraph3Click = function ($event) {
		$scope.paragraph3Field = true;
	}

	$scope.paragraph4Click = function ($event) {
		$scope.paragraph4Field = true;
	}

}]);