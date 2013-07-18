class Library < ActiveRecord::Base
  attr_accessible :album_id, :image, :name, :playlist_id, :track_id, :user_id

  belongs_to :user
  has_many :tracks, :through => :track_libraries
  has_many :track_libraries
  has_many :library_playlists
  has_many :playlists, :through => :library_playlists
  
end
