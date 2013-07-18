class Genre < ActiveRecord::Base
  attr_accessible :name

  belongs_to :track
  
end
