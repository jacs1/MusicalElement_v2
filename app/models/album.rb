class Album < ActiveRecord::Base
  attr_accessible :artist_id, :description, :image, :name, :release
end
