class Genre < ActiveRecord::Base
  attr_accessible :name, :track_id

  has_many :tracks
  
end
