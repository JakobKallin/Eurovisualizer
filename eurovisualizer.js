angular
.module('eurovisualizer', [])
.directive('europe', function() {
	return {
		restrict: 'E',
		templateUrl: 'europe.svg',
		replace: true
	}
});