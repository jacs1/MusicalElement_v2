class ArtistLibrary < ActiveRecord::Base
  attr_accessible :artist_id, :library_id

  belongs_to :library
  belongs_to :artist

  
end
