class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :artist, :image, :name, :release

  # belongs_to :artist

  has_many :tracks

  # def artist
  #   # binding.pry
  #   object.artist
  # end

end

