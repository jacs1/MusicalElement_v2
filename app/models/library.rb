class Library < ActiveRecord::Base
  attr_accessible :album_id, :image, :name, :playlist_id, :track_id, :user_id

  belongs_to :user

  has_many :tracks
  # has_many :track_libraries
  has_many :library_playlists
  has_many :playlists, :through => :library_playlists


  def local_artists
    @tracks = user.library.tracks
    @artists = []
    @tracks.each do |a|
      a.artists.each do |i|
        @artists << i
      end      
    end
      @artists.uniq!
      return @artists
  end

  def local_albums
    @tracks = user.library.tracks
    @albums = []
    @tracks.each do |a|
      @albums << a.album
    end
    # binding.pry
    @albums.uniq!
    binding.pry
    return @albums
  end

  def lib_filter(data)
    instance_variable_set("@#{data}", [])
    # binding.pry
    user.library.tracks.each do |a|
      if data == "albums"
        # @albums = []
        @albums << a.album
      else
        # binding.pry
        # @artists = []
        a.artists.each do |i|
          @artists << i
        end
      end
    end
    return instance_variable_get("@#{data}")   
  end

  
end
