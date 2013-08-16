class ArtistImage < ActiveRecord::Base
  attr_accessible :artist_id, :image
  
  belongs_to :artist
  
end
