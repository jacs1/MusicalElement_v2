class LibraryPlaylist < ActiveRecord::Base
  attr_accessible :library_id, :playlist_id

  belongs_to :library
  belongs_to :playlist
end
