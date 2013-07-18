class Playlist < ActiveRecord::Base
  attr_accessible :library_id, :name, :private, :track_position, :user_id
end
