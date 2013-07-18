class Track < ActiveRecord::Base
  attr_accessible :bpm, :genre_id, :length, :size, :title, :track_number, :track_path, :user_id, :year
end
