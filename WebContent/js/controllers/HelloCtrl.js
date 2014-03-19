angular.module('hello', [])
  .controller('HelloCtrl',function($scope) {
    $scope.getName = function() {
		return $scope.thing.name;
	};
	$scope.$on('$locationChangeStart', function (event, newUrl, oldUrl){
		alert(newUrl);
	});
	$scope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl){
		$scope.previousUrl = oldUrl;
		$scope.currentUrl = newUrl;
		alert(newUrl);
	});
});