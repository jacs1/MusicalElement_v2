class PlaylistTrack < ActiveRecord::Base
  attr_accessible :playlist_id, :track_id
end
