angular.module('eurovisualizer').controller('AppController', function($scope, $http) {
	$http.get('source/years.json').success(function(stats) {
		$scope.years = Object.keys(stats).sort();
		$scope.selected.year = $scope.years.last;
		
		$scope.countries = {};
		eurovisualizer.countryCodes.forEach(function(code) {
			var country = new eurovisualizer.Country(code, stats);
			$scope.countries[code] = country;
			$scope.selected.country = country;
		});
	});
	
	$scope.selected = {
		year: null,
		country: null,
		direction: 'to'
	};
	
	$scope.labels = {};
	
	eurovisualizer.countryCodes.forEach(function(country) {
		Object.defineProperty($scope.labels, country, {
			get: function() {
				return $scope.countryLabel(country);
			}
		});
	});
	
	$scope.countryLabel = function(countryCode) {
		if ( !$scope.selected.year ) {
			return;
		}
		
		var year = $scope.selected.year;
		var country = $scope.countries[countryCode];
		var selectedCountry = $scope.selected.country;
		var direction = $scope.selected.direction;
		var labels = [];
		
		if ( country === selectedCountry ) {
			labels.push('selected');
		} else if ( direction === 'to' && country.votes(year) ) {
			labels.push('points-' + country.pointsTo(selectedCountry, year));
		} else if ( direction === 'from' && country.competes(year) ) {
			labels.push('points-' + country.pointsFrom(selectedCountry, year));
		}
		
		if ( country.votes(year) ) {
			labels.push('in-contest');
		}
		if ( country.competes(year) ) {
			labels.push('in-final');
		}
		
		return labels;
	};
});