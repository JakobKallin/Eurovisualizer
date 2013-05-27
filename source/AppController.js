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
		var labels = {
			'selected': country === selectedCountry,
			'in-contest': country.votes(year),
			'in-final': country.competes(year)
		};
		
		if ( direction === 'to' && country.votes(year) ) {
			var points = country.pointsTo(selectedCountry, year);
		} else if ( direction === 'from' && country.competes(year) ) {
			var points = country.pointsFrom(selectedCountry, year);
		}
		
		if ( points !== undefined ) {
			labels['points-' + points] = true;
		}
		
		return labels;
	};
	
	$scope.onCountryClick = function(countryCode) {
		$scope.selected.country = $scope.countries[countryCode];
	};
});