class Playlist < ActiveRecord::Base
  attr_accessible :library_id, :name, :private, :track_position, :user_id

  has_many :comments, as: :commentable
  has_many :tracks, :through => :playlist_tracks
  has_many :playlist_tracks
  has_many :users, :through => :user_playlists
  has_many :user_playlists
  has_many :libraries, :through => :library_playlists
  has_many :library_playlists

  accepts_nested_attributes_for :tracks
  accepts_nested_attributes_for :playlist_tracks
  
end
