var countries = {
	"al": "Albania",
	"am": "Armenia",
	"at": "Austria",
	"az": "Azerbaijan",
	"by": "Belarus",
	"be": "Belgium",
	"ba": "Bosnia & Herzegovina",
	"bg": "Bulgaria",
	"hr": "Croatia",
	"cy": "Cyprus",
	"dk": "Denmark",
	"ee": "Estonia",
	"mk": "F.Y.R. Macedonia",
	"fi": "Finland",
	"fr": "France",
	"ge": "Georgia",
	"de": "Germany",
	"gr": "Greece",
	"hu": "Hungary",
	"is": "Iceland",
	"ie": "Ireland",
	"il": "Israel",
	"it": "Italy",
	"lv": "Latvia",
	"lt": "Lithuania",
	"mt": "Malta",
	"md": "Moldova",
	"no": "Norway",
	"pl": "Poland",
	"pt": "Portugal",
	"ro": "Romania",
	"ru": "Russia",
	"sm": "San Marino",
	"sr": "Serbia",
	"sk": "Slovakia",
	"si": "Slovenia",
	"es": "Spain",
	"se": "Sweden",
	"ch": "Switzerland",
	"nl": "The Netherlands",
	"tr": "Turkey",
	"ua": "Ukraine",
	"gb": "United Kingdom"
}
var contests = {
	"2010-final":
		{
		"name": "2010 Final",
		"contestants":["az","es","no","md","cy","ba","be","sr","by","ie","gr","gb","ge","tr","al","is","ua","fr","ro","ru","am","de","pt","il","dk"],
		"points":{
		"al":["gb","dk","sr","il","ro","ba","es","tr","de","gr"],
		"am":["ro","no","gr","pt","dk","fr","es","ua","ru","ge"],
		"az":["de","gb","ru","dk","il","md","ro","ge","ua","tr"],
		"by":["ro","is","tr","md","am","az","ge","il","ua","ru"],
		"be":["es","dk","al","ge","az","tr","am","is","de","gr"],
		"ba":["il","ro","fr","ge","al","gr","az","de","tr","sr"],
		"bg":["by","es","de","cy","gr","ge","ua","am","tr","az"],
		"hr":["ie","dk","fr","cy","al","de","ge","sr","ba","tr"],
		"cy":["sr","il","fr","de","ge","ua","am","ro","az","gr"],
		"dk":["cy","az","is","pt","no","tr","fr","ro","be","de"],
		"ee":["fr","ie","be","is","dk","tr","no","ge","ru","de"],
		"mk":["fr","dk","az","am","ge","ba","sr","de","tr","al"],
		"fi":["ie","dk","tr","es","is","be","gr","fr","il","de"],
		"fr":["il","ua","de","gr","ba","am","be","pt","sr","tr"],
		"ge":["md","es","gb","il","tr","no","ua","az","am","by"],
		"de":["al","ie","fr","is","sr","pt","am","gr","tr","be"],
		"gr":["az","de","is","ro","ge","be","am","fr","al","cy"],
		"is":["pt","ge","de","az","ro","fr","al","gr","be","dk"],
		"ie":["tr","no","az","gb","ge","fr","ro","de","be","dk"],
		"il":["es","ua","fr","dk","ge","ie","az","ro","ru","am"],
		"lv":["am","az","ro","be","es","pt","ua","ru","dk","de"],
		"lt":["cy","ro","dk","tr","ru","ua","be","es","de","ge"],
		"mt":["pt","fr","no","de","ro","is","gr","dk","be","az"],
		"md":["il","gr","by","es","ge","am","az","ua","ru","ro"],
		"no":["ge","tr","be","fr","il","is","az","dk","ro","de"],
		"pl":["gr","al","ua","ge","am","ro","de","az","be","dk"],
		"pt":["de","ru","no","dk","be","md","fr","gr","ro","es"],
		"ro":["al","es","de","be","ua","am","gr","tr","md","dk"],
		"ru":["dk","by","ro","es","be","de","ua","az","ge","am"],
		"sr":["am","pt","tr","fr","be","ro","ua","de","gr","ba"],
		"sk":["ro","cy","no","am","gr","ru","dk","il","be","de"],
		"si":["ge","tr","fr","ba","es","il","ro","sr","de","dk"],
		"es":["ge","fr","tr","dk","gr","pt","az","am","ro","de"],
		"se":["am","be","cy","no","tr","ge","sr","dk","ro","de"],
		"ch":["ge","az","tr","ro","pt","ie","be","al","sr","de"],
		"nl":["sr","dk","gr","de","ro","be","ua","tr","il","am"],
		"tr":["ua","ro","gr","ru","ge","am","al","ba","de","az"],
		"ua":["be","ro","il","es","de","am","ge","tr","ru","az"],
		"gb":["al","fr","il","de","ua","dk","ie","ro","tr","gr"]
		}
		},
	"2011-final":
		{
		"name": "2011 Final",
		"contestants":["fi","ba","dk","lt","hu","ie","se","ee","gr","ru","fr","it","ch","gb","md","de","ro","at","az","si","is","es","ua","sr","ge"],
		"points":{
		"al":["sr","fr","ua","ru","es","gb","ba","az","gr","it"],
		"am":["sr","gb","at","se","fr","it","gr","ru","ge","ua"],
		"at":["ro","hu","si","ie","md","it","sr","az","de","ba"],
		"az":["it","hu","se","ru","gb","ro","md","gr","ge","ua"],
		"by":["dk","gb","it","se","ru","az","md","de","ua","ge"],
		"be":["md","ee","az","se","de","it","ie","gr","ro","fr"],
		"ba":["is","ie","de","fr","se","it","at","az","sr","si"],
		"bg":["ge","ba","ie","ru","at","ro","dk","ua","gr","gb"],
		"hr":["de","lt","at","se","ua","fr","ba","sr","az","si"],
		"cy":["it","ru","dk","gb","ua","si","fr","az","se","gr"],
		"dk":["at","ee","gb","ro","fi","is","si","de","se","ie"],
		"ee":["ro","si","ge","es","ru","it","fi","az","dk","se"],
		"mk":["it","at","gr","es","gb","se","ua","sr","si","ba"],
		"fi":["at","sr","it","fr","az","se","ee","is","ie","hu"],
		"fr":["gb","hu","de","md","ba","az","dk","it","se","es"],
		"ge":["se","fr","at","ru","md","gr","it","az","ua","lt"],
		"de":["si","fi","it","md","ru","dk","ba","ie","gr","at"],
		"gr":["ru","gb","ba","de","az","se","ua","ge","it","fr"],
		"hu":["ro","at","ru","it","ge","si","az","gr","se","is"],
		"is":["ru","gb","it","ie","hu","de","se","az","fi","dk"],
		"ie":["ro","si","fi","se","it","gb","ee","md","lt","dk"],
		"il":["gb","ge","si","az","ee","ro","ua","ru","dk","se"],
		"it":["fr","gr","sr","ba","is","de","ua","md","gb","ro"],
		"lv":["fr","az","si","ee","gb","dk","lt","de","ie","it"],
		"lt":["fi","de","gb","md","sr","ru","ee","az","it","ge"],
		"mt":["fr","at","si","ua","dk","se","gb","ie","it","az"],
		"md":["gr","fr","se","gb","ru","ee","ge","ua","az","ro"],
		"no":["gb","ee","lt","ba","de","sr","dk","is","se","fi"],
		"pl":["ie","ua","dk","de","fi","sr","ge","az","it","lt"],
		"pt":["si","fr","gb","is","md","ie","ua","az","it","es"],
		"ro":["lt","ua","se","si","es","it","hu","gr","az","md"],
		"ru":["se","lt","fr","gb","si","ge","md","gr","ua","az"],
		"sm":["si","gb","fr","dk","sr","se","ge","gr","az","it"],
		"sr":["se","it","gr","ru","ch","ua","lt","hu","si","ba"],
		"sk":["si","es","at","ch","md","dk","az","ie","se","ua"],
		"si":["gb","es","it","se","at","ua","de","dk","sr","ba"],
		"es":["lt","is","de","sr","se","hu","ie","ro","fr","it"],
		"se":["is","ua","az","at","hu","de","fi","ba","dk","ie"],
		"ch":["az","gr","es","it","fi","sr","at","de","is","ba"],
		"nl":["at","si","sr","ro","ie","az","de","ba","se","dk"],
		"tr":["at","si","de","se","ro","gb","ua","ge","ba","az"],
		"ua":["se","ee","gb","hu","fr","gr","md","ru","az","ge"],
		"gb":["es","at","se","is","dk","lt","it","md","ch","ie"]
		}
		}
};

var Eurovision = new function() {
	this._countries = {};
	this._contests = {};
	
	this.pointsFromIndex = function(index) {
		if ( index <= 7 ) {
			return index + 1;
		} else if ( index == 8 ) {
			return 10;
		} else {
			return 12;
		}
	}
	
	this.flipScoreboard = function(scoreboard) {
		var convertedScoreboard = {}
		
		for ( var donor in scoreboard ) {
			jQuery.each(scoreboard[donor], function(index) {
				var recipient = scoreboard[donor][index];
				var points = Eurovision.pointsFromIndex(index);
				
				if ( !(recipient in convertedScoreboard) ) {
					convertedScoreboard[recipient] = {};
				}
				
				convertedScoreboard[recipient][donor] = points;
			});
		}
		
		return convertedScoreboard;
	}
	
	this.countries = function() {
		return this._countries;
	}
	
	this.orderedCountries = function() {
		var list = [];
		for ( var countryCode in this._countries ) {
			list.push(this._countries[countryCode]);
		}
		list.sort(function(a, b) {
			if ( a.name < b.name ) { return -1; }
			else if ( a.name > b.name ) { return 1; }
			else { return 0; }
		});
		return list;
	}
	
	this.addCountry = function(country) {
		this._countries[country.code] = country;
	}
	
	this.countryWithCode = function(code) {
		return this._countries[code];
	}
	
	this.contests = function() {
		return this._contests;
	}
	
	this.contestWithCode = function(code) {
		return this._contests[code];
	}
	
	this.orderedContests = function() {
		var list = [];
		for ( var contestCode in this._contests ) {
			list.push(this._contests[contestCode]);
		}
		list.sort(function(a, b) {
			if ( a.name < b.name ) { return 1; }
			else if ( a.name > b.name ) { return -1; }
			else { return 0; }
		});
		return list;
	}
	
	this.addContest = function(contest) {
		this._contests[contest.code] = contest;
	}
}();

function Country(code, name) {
	this.code = code;
	this.name = name;
	this.node = document.getElementById(this.code);
	
	this.competesIn = function(contest) {
		return jQuery.inArray(this, contest.contestants) !== -1;
	}
	
	this.votesIn = function(contest) {
		return this.code in contest.donorToRecipient;
	}
}

function Contest(code, name, contestants, scoreboard) {
	this.code = code;
	this.name = name;
	this.contestants = jQuery.map(contestants, function(code) { return Eurovision.countryWithCode(code); });
	this.donorToRecipient = scoreboard;
	this.recipientToDonor = Eurovision.flipScoreboard(scoreboard);
}

var modes = {};
function GenericMode() {
	this.applyToCountries = function(callback) {
		callback(selected.country.node, selected.mode.className(selected.country, selected.contest));
		var table = selected.mode.points(selected.country, selected.contest);
		for ( var relatedCountryCode in table ) {
			var relatedCountry = Eurovision.countryWithCode(relatedCountryCode);
			var points = table[relatedCountry.code];
			callback(relatedCountry.node, 'points-' + points);
		}
	}
	
	this.className = function(country, contest) {
		if ( country.competesIn(contest) ) {
			return 'contestant';
		} else if ( country.votesIn(contest) ) {
			return 'non-contestant';
		} else {
			return 'non-participant';
		}
	};
	
	this.colorize = function() {
		this.applyToCountries(addSvgClass);
	}
	
	this.uncolorize = function() {
		this.applyToCountries(removeSvgClass);
	}
};
modes.generic = new GenericMode();
	
function DonorMode() {
	this.code = 'donors';
	
	this.points = function(recipient, contest) {
		if ( recipient.competesIn(contest) ) {
			return contest.recipientToDonor[recipient.code];
		} else {
			return {};
		}
	}
};
DonorMode.prototype = modes.generic;
modes.donors = new DonorMode();
	
function RecipientMode() {
	this.code = 'recipients';
	
	this.points = function(donor, contest) {
		if ( donor.votesIn(contest) ) {
			var table = {};
			var recipients = contest.donorToRecipient;
			jQuery.each(recipients[donor.code], function(index, recipient) {
				table[recipient] = Eurovision.pointsFromIndex(index);
			});
			return table;
		} else {
			return {};
		}
	}
};
RecipientMode.prototype = modes.generic;
modes.recipients = new RecipientMode();

var selected = {
	contest: null,
	country: null,
	mode: null
};

$(document).ready(loadData);

function loadData() {
	for ( var countryCode in countries ) {
		var countryName = countries[countryCode];
		var country = new Country(countryCode, countryName);
		Eurovision.addCountry(country);
	}
	
	for ( var contestCode in contests ) {
		var contestData = contests[contestCode];
		var contest = new Contest(contestCode, contestData.name, contestData.contestants, contestData.points);
		Eurovision.addContest(contest);
	}
	
	setupInterface();
}

/*
function loadData() {
	jQuery.getJSON('countries.json', receiveCountryNames);
}

function receiveCountryNames(countryNames) {
	for ( var countryCode in countryNames ) {
		var countryName = countryNames[countryCode];
		var country = new Country(countryCode, countryName);
		Eurovision.addCountry(country);
	}
	
	jQuery.getJSON('contests.json', receiveContestCodes);
}

var contestsRemaining;
function receiveContestCodes(contestCodes) {
	contestsRemaining = contestCodes.length;
	jQuery.each(contestCodes, function(index, contestCode) {
		jQuery.ajax({
			url: 'scores/' + contestCode + '.json',
			dataType: 'json',
			success: function(contestData) { receiveContestData(contestData, contestCode); },
			error: function(request, type, error) { alert(error); }
		});
	});
}

function receiveContestData(contestData, contestCode) {
	var contest = new Contest(contestCode, contestData.name, contestData.contestants, contestData.points);
	Eurovision.addContest(contest);
	
	contestsRemaining -= 1;
	if ( contestsRemaining === 0 ) {
		setupInterface();
	}
}*/

function setupInterface() {
	populateContestList();
	populateCountryList();
	enableMapClicks();
	initializeParameters();
	selected.mode.colorize();
	updateInterface();
	enableInterface();
}

function populateContestList() {
	jQuery.each(Eurovision.orderedContests(), function() {
		var option = $(document.createElement('option'));
		option.text(this.name);
		option.attr('value', this.code);
		$('#contest').append(option);
	});
}

function populateCountryList() {
	jQuery.each(Eurovision.orderedCountries(), function() {
		var option = $(document.createElement('option'));
		option.attr('value', this.code);
		option.text(this.name);
		$('#country').append(option);
	});
}

function enableMapClicks() {
	for ( var countryCode in Eurovision.countries() ) {
		var country = Eurovision.countries()[countryCode];
		$(country.node).click(function() { setParameter('country', Eurovision.countryWithCode(this.id)); });
	}
}

function initializeParameters() {
	selected.contest = Eurovision.orderedContests()[0];
	selected.mode = modes.donors;
	selected.country = Eurovision.orderedCountries()[0];
}

function setParameter(name, value) {
	if ( value !== selected[name] ) {
		selected.mode.uncolorize();
		selected[name] = value;
		selected.mode.colorize();
		updateInterface();
	}
}

function updateInterface() {
	$('#country').val(selected.country.code);
	$('#contest').val(selected.contest.code);
	$(document.getElementById(selected.mode.code)).attr('checked', 'checked');
	$('.country').text(selected.country.name);
}

function enableInterface() {
	enableContestList();
	enableCountryList();
	enableModeButtons();
}

function enableContestList() {
	var callback = function() { setParameter('contest', Eurovision.contestWithCode(this.value)); }
	$('#contest').change(callback);
	$('#contest').keypress(callback);
}

function enableCountryList() {
	var callback = function() { setParameter('country', Eurovision.countryWithCode(this.value)); }
	$('#country').change(callback);
	$('#country').keypress(callback);
}

function enableModeButtons() {
	var callback = function() {
		if ( $(this).attr('checked') ) {
			setParameter('mode', modes[this.value]);
		}
	}
	$('input[name=mode]').change(callback);
}

function addSvgClass(node, className) {
	if ( nodeIsCollection(node) ) {
		var paths = node.getElementsByTagName('path');
		for ( var i = 0; i < paths.length; i++ ) {
			addSvgClass(paths[i], className);
		}
	} else {
		node.className.baseVal += ' ' + className;
	}
}

function removeSvgClass(node, className) {
	var pattern = new RegExp('(\\s|^)' + className + '(\\s|$)');
	
	if ( nodeIsCollection(node) ) {
		var paths = node.getElementsByTagName('path');
		for ( var i = 0; i < paths.length; i++ ) {
			removeSvgClass(paths[i], className);
		}
	} else {
		node.className.baseVal = node.className.baseVal.replace(pattern, ' ');
	}
}

function replaceSvgClass(node, oldClassName, newClassName) {
	node.className.baseVal.replace(oldClassName, newClassName);
}

function nodeIsCollection(node) {
	return node.tagName == 'g';
}