angular.module("practiceModule", [])

angular.module("practiceModule").controller("practiceController", ["$scope",function($scope){

	// $scope.randomInfo = {
	// 	heading : "Name goes here",
	// 	one		: "Hey, I say a different thing!",
	// 	two		: "And another different thing!",
	// 	three   : "How impressive..."
	// }

	$scope.randomInfo = ["Name goes here", "doesn't matter", "blah", "index"]

	$scope.booleanIndex = [false,false,false,false]

	$scope.clickText = function ( $index ) {
		$scope.booleanIndex[$index] = true;
	}

	$scope.focused = function ( $index ) {
		$scope.booleanIndex[$index] = true;
	}

	$scope.blurred = function ( $index ) {
		$scope.booleanIndex[$index] = false;
	}

}])