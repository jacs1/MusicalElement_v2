class AddTrackLocationToTrack < ActiveRecord::Migration
  def change
    add_column :tracks, :track_location, :string
  end
end
