class Artist < ActiveRecord::Base
  attr_accessible :age, :artist_type, :birthday, :first_name, :gender, :image_id, :last_name, :name
end
