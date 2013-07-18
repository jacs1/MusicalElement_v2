class Library < ActiveRecord::Base
  attr_accessible :album_id, :image, :name, :playlist_id, :track_id, :user_id
end
