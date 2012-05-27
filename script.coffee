country_names = {
	'al': 'Albania',
	'ad': 'Andorra',
	'am': 'Armenia',
	'at': 'Austria',
	'az': 'Azerbaijan',
	'by': 'Belarus',
	'be': 'Belgium',
	'ba': 'Bosnia & Herzegovina',
	'bg': 'Bulgaria',
	'hr': 'Croatia',
	'cy': 'Cyprus',
	'cz': 'Czech Republic',
	'dk': 'Denmark',
	'ee': 'Estonia',
	'mk': 'F.Y.R. Macedonia',
	'fi': 'Finland',
	'fr': 'France',
	'ge': 'Georgia',
	'de': 'Germany',
	'gr': 'Greece',
	'hu': 'Hungary',
	'is': 'Iceland',
	'ie': 'Ireland',
	'il': 'Israel',
	'it': 'Italy',
	'lv': 'Latvia',
	'lt': 'Lithuania',
	'mt': 'Malta',
	'md': 'Moldova',
	'mc': 'Monaco',
	'me': 'Montenegro',
	'no': 'Norway',
	'pl': 'Poland',
	'pt': 'Portugal',
	'ro': 'Romania',
	'ru': 'Russia',
	'sm': 'San Marino',
	'rs': 'Serbia',
	'sk': 'Slovakia',
	'si': 'Slovenia',
	'es': 'Spain',
	'se': 'Sweden',
	'ch': 'Switzerland',
	'nl': 'The Netherlands',
	'tr': 'Turkey',
	'ua': 'Ukraine',
	'gb': 'United Kingdom'
}

class App extends Batman.App
	@global yes
	@root 'map#index'

class App.MapController extends Batman.Controller
	index: ->
		@render false

class Selected extends Batman.Model
	@accessor 'event', () ->
		event_title = App.get('selected_event_title')
		event = App.get('events')[event_title]
	@accessor 'country', () ->
		country_code = App.get('selected_country_code')
		country = App.get('countries')[country_code]
	@accessor 'donor_mode', () ->
		@get('direction') is 'from'
	@accessor 'recipient_mode', () ->
		@get('direction') is 'to'
App.set('selected', new Selected())

class Event extends Batman.Model
	constructor: (@title, @recipients, @donors, @points) ->

class Country extends Batman.Model
	constructor: (@name, @code) ->
	click: () ->
		App.set('selected_country_code', @code)
	@accessor 'flag_path', () ->
		"flags/#{@code}.svg"
	@accessor 'participates', () ->
		this in App.get('selected').get('event').get('donors')
	@accessor 'competes', () ->
		this in App.get('selected').get('event').get('recipients')
	@accessor 'is_selected', () ->
		this is App.get('selected').get('country')
	@accessor 'className', () ->
		classes = []
		classes.push('in-eurovision')
		
		if this.get('competes')
			classes.push('contestant')
		else
			classes.push('non-contestant')
		
		if this.get('is_selected')
			classes.push('selected')
		else
			event = App.get('selected').get('event')
			other_country = App.get('selected').get('country')
			point = 0
			
			switch App.get('selected').get('direction')
				when 'from'
					if event.points.from[other_country.code] and event.points.from[other_country.code][@code]?
						point = event.points.from[other_country.code][@code]
				else
					if event.points.to[other_country.code] and event.points.to[other_country.code][@code]?
						point = event.points.to[other_country.code][@code]
			classes.push("points-#{point}")
		
		return classes.join(' ')

bind_country_nodes = () ->
	for name, country of App.countries
		node = document.getElementById(country.code)
		country_path = "countries.#{country.code}"
		node.setAttribute('data-context', country_path)
		node.setAttribute('data-event-click', 'click')
		node.setAttribute('data-bind-class', 'className')
		# Enable binding to the class attribute with this hack.
		node.__defineSetter__('className', (value) -> @setAttribute('class', value))

unique_countries = (events) ->
	countries = []
	for title, event of events
		for country in event.donors
			countries.push(country) unless country in countries
	return countries

load_events = (signal_events_parsed) ->
	years = [1998 .. 2012]
	events = {}
	countries = {}
	
	on_years_loaded = (years) ->
		parse_year(year) for year in years
		signal_events_parsed(events, countries)
	
	parse_year = (year) ->
		title = "#{year.year} Final"
		final = year.final
		for code in final.donors
			name = country_names[code]
			countries[code] = new Country(name, code) unless countries[code]?
		
		recipients = (countries[code] for code in final.recipients)
		donors = (countries[code] for code in final.donors)
		
		event = new Event(title, recipients, donors, final.points)
		events[title] = event
	
	filename = 'years.json'
	jQuery.get(filename, on_years_loaded, 'json')

on_events_parsed = (events, countries) ->
	App.set('events', events)
	sorted_events = (event for title, event of events).sort((a, b) -> b.title.localeCompare(a.title))
	App.set('sorted_events', sorted_events)
	App.set('selected_event_title', sorted_events[0].title)
	
	App.set('countries', countries)
	sorted_countries = unique_countries(events).sort((a, b) -> a.name.localeCompare(b.name))
	App.set('sorted_countries', sorted_countries)
	App.set('selected_country_code', sorted_countries[0].code)
	
	App.get('selected').set('direction', 'to')
	
	bind_country_nodes()
	
	App.run()

start = () ->
	load_events(on_events_parsed)
	
start()