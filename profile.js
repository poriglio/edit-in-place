angular.module("formModule", [])

angular.module("formModule").controller("formController", ["$scope", function($scope){

	$scope.userinfo = {
		username : "enter your name here",
		nickname : "enter your nickname",
		location : "enter your location",
		website  : "enter your URL",
		intro    : "enter your introductory heading",
		caption1 : "enter a caption for this image",
		caption2 : "enter a caption for this image",
		caption3 : "enter a caption for this image",
		bio1	 : "enter some biographical info",
		bio2	 : "enter some biographical info",
		bio3	 : "enter some biographical info",
		bio4	 : "enter some biographical info"
	}

	$scope.showTextbox = function ( $event ) {
		$scope.textboxVisible = true;
	}


}]);