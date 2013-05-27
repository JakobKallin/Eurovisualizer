angular.module('eurovisualizer', []);

var eurovisualizer = {};

eurovisualizer.Country = function(code, stats) {
	this.code = code;
	this.stats = stats;
};

eurovisualizer.Country.prototype = {
	pointsTo: function(recipient, year) {
		if ( this.votes(year) ) {
			return this.finalStats(year).points.to[recipient];
		} else {
			return null;
		}
	},
	pointsFrom: function(donor, year) {
		if ( this.competes(year) ) {
			return this.finalStats(year).points.from[donor];
		} else {
			return null;
		}
	},
	competes: function(year) {
		if ( this in this.stats[year].countries ) {
			return this.finalStats(year).competes;
		} else {
			return false;
		}
	},
	votes: function(year) {
		return this in this.stats[year].countries;
	},
	runningOrder: function(year) {
		if ( this.competes(year) ) {
			return this.finalStats(year).runningOrder;
		} else {
			return null;
		}
	},
	place: function(year) {
		if ( this.competes(year) ) {
			return this.finalStats(year).place;
		} else {
			return null;
		}
	},
	song: function(year) {
		if ( this.competes(year) ) {
			return this.yearStats(year).song;
		} else {
			return null;
		}
	},
	yearStats: function(year) {
		return this.stats[year].countries[this];
	},
	finalStats: function(year) {
		return this.stats[year].final.countries[this];
	},
	toString: function() {
		return this.code;
	}
};

eurovisualizer.countryCodes = ['ad', 'al', 'am', 'at', 'az', 'ba', 'be', 'bg', 'by', 'ch', 'cy', 'cz', 'de', 'dk', 'dz', 'ee', 'es', 'fi', 'fr', 'gb', 'ge', 'gr', 'hr', 'hu', 'ie', 'il', 'iq', 'ir', 'is', 'it', 'jo', 'kz', 'lb', 'li', 'lt', 'lu', 'lv', 'ma', 'mc', 'md', 'me', 'mk', 'mt', 'nl', 'no', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'si', 'sk', 'sm', 'sy', 'tm', 'tn', 'tr', 'ua'];