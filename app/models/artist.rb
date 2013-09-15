class Artist < ActiveRecord::Base
  attr_accessible :age, :artist_type, :birthday, :first_name, :gender, :last_name, :biography, :name, :artist_images_attributes

  has_many :tracks, :through => :artist_tracks
  has_many :artist_tracks
  has_many :albums
  has_many :artist_images
  has_many :libraries, :through => :artist_libraries
  has_many :artist_libraries

  accepts_nested_attributes_for :artist_images, allow_destroy: true

  
end
