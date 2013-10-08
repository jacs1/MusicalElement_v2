class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name

  # has_many :tracks, :through => :artist_tracks
  # has_many :artist_tracks
  # has_many :albums

end
