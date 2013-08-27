class Artist < ActiveRecord::Base
  attr_accessible :age, :artist_type, :birthday, :first_name, :gender, :last_name, :name

  has_many :tracks, :through => :artist_tracks
  has_many :artist_tracks
  has_many :albums
  has_many :artist_images
  has_many :libraries, :through => :artist_libraries
  has_many :artist_libraries

  
end
