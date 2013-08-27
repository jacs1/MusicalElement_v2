class AlbumLibrary < ActiveRecord::Base
  attr_accessible :album_id, :library_id

  belongs_to :library
  belongs_to :album
  
end
