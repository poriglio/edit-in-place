angular.module("practiceModule", [])

angular.module("practiceModule").controller("practiceController", ["$scope",function($scope){

	$scope.randomInfo = {
		heading : "Name goes here",
		one		: "Hey, I say a different thing!",
		two		: "And another different thing!",
		three   : "How impressive..."
	}

	$scope.clickText = function ( $event ) {
		$scope.boxVisibility = true;
	}

	$scope.focused = function ( $event ) {
		$scope.boxVisibility = true;
	}

	$scope.blurred = function ( $event ) {
		$scope.boxVisibility = false;
	}

}])