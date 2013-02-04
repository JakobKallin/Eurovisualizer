	var App = new function() {
	var self = this;
	
	self.countries = {
		al: { name: 'Albania', code: 'al' },
		ad: { name: 'Andorra', code: 'ad' },
		am: { name: 'Armenia', code: 'am' },
		at: { name: 'Austria', code: 'at' },
		az: { name: 'Azerbaijan', code: 'az' },
		by: { name: 'Belarus', code: 'by' },
		be: { name: 'Belgium', code: 'be' },
		ba: { name: 'Bosnia & Herzegovina', code: 'ba' },
		bg: { name: 'Bulgaria', code: 'bg' },
		hr: { name: 'Croatia', code: 'hr' },
		cy: { name: 'Cyprus', code: 'cy' },
		cz: { name: 'Czech Republic', code: 'cz' },
		dk: { name: 'Denmark', code: 'dk' },
		ee: { name: 'Estonia', code: 'ee' },
		mk: { name: 'F.Y.R. Macedonia', code: 'mk' },
		fi: { name: 'Finland', code: 'fi' },
		fr: { name: 'France', code: 'fr' },
		ge: { name: 'Georgia', code: 'ge' },
		de: { name: 'Germany', code: 'de' },
		gr: { name: 'Greece', code: 'gr' },
		hu: { name: 'Hungary', code: 'hu' },
		is: { name: 'Iceland', code: 'is' },
		ie: { name: 'Ireland', code: 'ie' },
		il: { name: 'Israel', code: 'il' },
		it: { name: 'Italy', code: 'it' },
		lv: { name: 'Latvia', code: 'lv' },
		lt: { name: 'Lithuania', code: 'lt' },
		mt: { name: 'Malta', code: 'mt' },
		md: { name: 'Moldova', code: 'md' },
		mc: { name: 'Monaco', code: 'mc' },
		me: { name: 'Montenegro', code: 'me' },
		no: { name: 'Norway', code: 'no' },
		pl: { name: 'Poland', code: 'pl' },
		pt: { name: 'Portugal', code: 'pt' },
		ro: { name: 'Romania', code: 'ro' },
		ru: { name: 'Russia', code: 'ru' },
		sm: { name: 'San Marino', code: 'sm' },
		rs: { name: 'Serbia', code: 'rs' },
		sk: { name: 'Slovakia', code: 'sk' },
		si: { name: 'Slovenia', code: 'si' },
		es: { name: 'Spain', code: 'es' },
		se: { name: 'Sweden', code: 'se' },
		ch: { name: 'Switzerland', code: 'ch' },
		nl: { name: 'The Netherlands', code: 'nl' },
		tr: { name: 'Turkey', code: 'tr' },
		ua: { name: 'Ukraine', code: 'ua' },
		gb: { name: 'United Kingdom', code: 'gb' }
	};
	
	function bindCountryNodes() {
		for ( var code in self.countries ) {
			self.countries[code].className = 'selected';
			
			var node = document.getElementById(code);
			var countryPath = 'countries.' + code;
			
			var startComment = document.createComment(' ko with: ' + countryPath + ' ');
			node.parentNode.insertBefore(startComment, node);
			
			var endComment = document.createComment(' /ko ');
			node.parentNode.insertBefore(endComment, node.nextSibling);
			
			// node.setAttribute('data-event-click', 'click');
			node.setAttribute('data-attr-class', 'className');
			
			// Enable binding to the class attribute with this hack.
			Object.defineProperty(node, 'className', {
				set: function(value) {
					this.setAttribute('class', value);
				}
			});
		}
	}
	
	window.addEventListener('load', function() {
		bindCountryNodes();
		attributeBindings.processDocument();
		knockwrap.wrap(self);
		ko.applyBindings(self);
	});
}();