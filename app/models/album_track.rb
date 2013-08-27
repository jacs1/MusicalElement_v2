class AlbumTrack < ActiveRecord::Base
  attr_accessible :album_id, :track_id

  belongs_to :track
  belongs_to :album

  
end
