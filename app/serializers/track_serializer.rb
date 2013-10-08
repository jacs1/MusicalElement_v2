class TrackSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :length, :size, :track_number
  
  has_many :artists, :through => :artist_tracks
  # has_many :artist_tracks

  def url
    # binding.pry
    object.track_location.to_s
  end

end
