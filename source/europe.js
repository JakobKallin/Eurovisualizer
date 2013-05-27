angular.module('eurovisualizer').directive('europe', function() {
	return {
		restrict: 'E',
		templateUrl: 'source/europe.svg',
		replace: true,
		scope: {
			labels: '=ngModel'
		},
		compile: function($svg, attrs) {
			var svg = $svg[0];
			var paths = svg.getElementsByTagName('path');
			Array.prototype.forEach.call(paths, function(path) {
				path.dataset.ngClass = 'labels.' + path.id;
				
				// Enable binding to SVG class.
				Object.defineProperty(path, 'className', {
					get: function() {
						// JQLite expects empty string if no class, otherwise it's converted to the string "null".
						return this.getAttribute('class') || '';
					},
					set: function(value) {
						this.setAttribute('class', value);
					}
				});
			});
		}
	};
});