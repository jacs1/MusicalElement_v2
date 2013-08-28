class Album < ActiveRecord::Base
  attr_accessible :description, :image, :name, :release, :artist_attributes

  belongs_to :artist

  has_many :tracks
  has_many :libraries, :through => :album_libraries
  has_many :album_libraries

  accepts_nested_attributes_for :artist
  
end
