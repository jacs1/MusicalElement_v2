class Album < ActiveRecord::Base
  attr_accessible :description, :image, :name, :release, :track_id

  belongs_to :artist
  # belongs_to :library
  
  has_many :tracks

  
  
end
