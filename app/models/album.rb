class Album < ActiveRecord::Base
  attr_accessible :artist_id, :description, :image, :name, :release

  belongs_to :artist#, :foreign_key => :album_artist, :primary_key => :artist_id
  has_many :tracks, :through => :album_tracks
  has_many :album_tracks
  
end
