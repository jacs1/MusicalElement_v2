# require 'taglib'
require "mp3info"
class Track < ActiveRecord::Base

  attr_accessible :bpm, :length, :size, :title, :track_number, :track_location, :user_id, :year, :library_id, :album_id

  include Rails.application.routes.url_helpers
  include ActionDispatch::Routing::UrlFor
  mount_uploader :track_location, TrackLocationUploader

  belongs_to :user
  # belongs_to :playlist
  # belongs_to :artist
  belongs_to :library
  belongs_to :album
  belongs_to :genre

  # has_many :libraries, :through => :track_libraries
  # has_many :track_libraries
  has_many :playlists, :through => :playlist_tracks
  has_many :playlist_tracks
  has_many :artists, :through => :artist_tracks
  has_many :artist_tracks
  # has_many :albums, :through => :album_tracks
  # has_many :album_tracks
  # has_one :album


  letsrate_rateable "sound"


  accepts_nested_attributes_for :artists
  accepts_nested_attributes_for :album
  # accepts_nested_attributes_for :genre

  def parse_id3(data)
    x = "public"+track_location.to_s
    # binding.pry
    Mp3Info.open(x) do |f|
    # binding.pry
      self.title = f.tag2["TIT2"]
      self.bpm = f.tag2["TBPM"]
      self.year = f.tag2["TYER"]
      self.track_number = f.tag2["TRCK"]
      self.length = f.length.to_i
      self.size = (self.track_location.file.size.to_f/(1000*1000)).round(2)
      # self.size = x.size * 1024
      # binding.pry
      self.album = Album.find_or_create_by_name(f.tag2["TALB"])
      self.album.artist = Artist.find_or_create_by_name(f.tag2["TPE2"])
      self.album.release = f.tag2["TYER"]
      self.genre = Genre.find_or_create_by_name(f.tag2["TCON"])
      # binding.pry
      # self.album_artist = Artist.find_or_create_by_name(f.tag2["TPE2"])

        f.tag2["TPE1"].split("/").each do |i|
          a = []
          a[0] = Artist.find_or_create_by_name(i)
          # binding.pry
          self.artists << a
          # binding.pry
        end
      user.library.albums << self.album
      user.library.artists << self.artists
      # binding.pry

      # # Attached picture frame
      # cover = tag.frame_list('APIC').first
      # cover.mime_type
      # cover.picture
      # self.parse_artist(data)
      # binding.pry
      end
  end

    def to_jq_upload
      # binding.pry
    {
      "id" => id,
      "name" => title,
      "size" => size * 1024 * 1024,
      "url" => track_location_url,
      "track_url" => self.track_location,
      # "delete_url" => library_track_path(:id => self.id),
      "delete_type" => "DELETE"
    }
  end


  #   def to_jq_upload
  #     binding.pry
  #   {
  #     "name" => read_attribute(:track),
  #     "size" => track.size,
  #     "url" => track.url,
  #     "thumbnail_url" => track.thumb.url,
  #     "delete_url" => track_path(:id => id),
  #     "delete_type" => "DELETE"
  #   }
  # end

end
