# require 'lastfm'

# lastfm = Lastfm.new('b31333127b32b11d089abaf544bd899c', 'a102a78f55a22dae60c24a5a06caa006')
# token = lastfm.auth.get_token

# open 'http://www.last.fm/api/auth/?api_key=xxxxxxxxxxx&token=xxxxxxxx' and grant the application
# binding.pry
# lastfm.session = lastfm.auth.get_session(:token => token)['key']

LastFM.api_key     = "b31333127b32b11d089abaf544bd899c"
LastFM.client_name = "MusicalElement_v2"