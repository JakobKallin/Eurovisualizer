angular.module('eurovisualizer').controller('AppController', function($scope, $http) {
	$scope.years = [];
	$scope.selected = {
		year: null,
		country: 'se',
		direction: 'to'
	};
	$scope.countries = {
		dk: 'Denmark',
		fi: 'Finland',
		is: 'Iceland',
		no: 'Norway',
		se: 'Sweden'
	};
	
	$http.get('source/years.json')
	.success(function(newYears) {
		$scope.years = newYears;
		$scope.selected.year = newYears.last;
	});
	
	$scope.directions = {
		to: function(selected, other, event) {
			var recipient = selected;
			var donor = other;
			return event.countries[donor].points.to[recipient];
		},
		from: function(selected, other, event) {
			return this.to(other, selected, event);
		}
	};
	
	$scope.labels = {};
	
	Object.keys($scope.countries).forEach(function(country) {
		Object.defineProperty($scope.labels, country, {
			get: function() {
				return countryLabel(country);
			}
		});
	});
	
	function countryLabel(country) {
		if ( !$scope.selected.year ) {
			return;
		}
		if ( country === $scope.selected.country ) {
			return 'selected';
		} else {
			var selected = $scope.selected.country;
			var direction = $scope.selected.direction;
			var year = $scope.selected.year;
			var event = year.final;
			return 'points-' + $scope.directions[direction](selected, country, event);
		}
	}
});