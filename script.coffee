class App extends Batman.App
	@global yes

class Event extends Batman.Model
	constructor: (@title, @recipients, @donors, @points) ->

class Country extends Batman.Model
	constructor: (@name) ->
	@accessor 'participates', () ->
		event_title = App.get('selected_event_title')
		event = App.get('events')[event_title]
		return this in event.get('donors')

unique_countries = (events) ->
	countries = []
	for title, event of events
		for country in event.donors
			countries.push(country) unless country in countries
	return countries

load_events = (signal_events_loaded) ->
	years = [2009..2011]
	events = {}
	events_loaded = 0
	events_to_load = years.length
	countries = {}

	load_event = (year) ->
		filename = "years/#{year}.json"
		jQuery.get(filename, on_event_loaded, 'json')

	on_event_loaded = (data) ->
		title = "#{data.year} Final"
		final = data.final
		for name in final.donors
			countries[name] = new Country(name) unless countries[name]?
		
		recipients = (countries[name] for name in final.recipients)
		donors = (countries[name] for name in final.donors)
		
		event = new Event(title, recipients, donors, final.points)
		events[title] = event
		events_loaded += 1
		if events_loaded == events_to_load
			signal_events_loaded(events, countries)
			
	load_event(year) for year in years

on_events_loaded = (events, countries) ->
	App.set('events', events)
	sorted_events = (event for title, event of events).sort((a, b) -> b.title.localeCompare(a.title))
	App.set('sorted_events', sorted_events)
	App.set('selected_event_title', sorted_events[0].title)
	
	App.set('countries', countries)
	sorted_countries = unique_countries(events).sort((a, b) -> a.name.localeCompare(b.name))
	App.set('sorted_countries', sorted_countries)
	App.set('selected_country_name', sorted_countries[0].name)

start = () ->
	load_events(on_events_loaded)
	App.run()
	
start()