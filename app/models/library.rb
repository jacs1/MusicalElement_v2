class Library < ActiveRecord::Base
  attr_accessible :album_id, :image, :name, :playlist_id, :track_id, :user_id

  belongs_to :user

  has_many :tracks
  # has_many :track_libraries
  has_many :library_playlists
  has_many :playlists, :through => :library_playlists
  has_many :albums, :through => :album_libraries
  has_many :album_libraries
  has_many :artists, :through => :artist_libraries
  has_many :artist_libraries


  def lib_filter(data)
    instance_variable_set("@#{data}", [])
    user.library.tracks.each do |a|
      if data == "albums"
        @albums << a.album
      else
        a.artists.each do |i|
          @artists << i
        end
      end
    end
    return instance_variable_get("@#{data}")   
  end

  
end
