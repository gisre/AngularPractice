angular.module('text',['notificationsApp'])
  .controller('TextAreaWithLimitCtrl', function ($scope, notificationsService) {
	var MAX_LEN = 100, WARN_THRESHOLD = 20;
	$scope.message = '';
	$scope.remaining = function () {
	  return MAX_LEN - $scope.message.length;
	};
	$scope.hasValidLength = function() {
	  if ($scope.remaining() < 0) {
	    return false;
	  }
	  return true;
	};
	$scope.send = function () {
	  notificationsService.push($scope.message);
	  $scope.clear();
	};
	$scope.clear = function () {
	  $scope.message = '';
	};
	$scope.shouldWarn = function() {
	  return $scope.remaining() < WARN_THRESHOLD;
	};
});