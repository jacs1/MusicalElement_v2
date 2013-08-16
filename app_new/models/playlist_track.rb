class PlaylistTrack < ActiveRecord::Base
  attr_accessible :playlist_id, :track_id

  belongs_to :track
  belongs_to :playlist
  
end
