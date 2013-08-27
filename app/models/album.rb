class Album < ActiveRecord::Base
  attr_accessible :description, :image, :name, :release

  belongs_to :artist

  has_many :tracks
  has_many :libraries, :through => :album_libraries
  has_many :album_libraries

  
  
end
