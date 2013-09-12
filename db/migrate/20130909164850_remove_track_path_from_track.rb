class RemoveTrackPathFromTrack < ActiveRecord::Migration
  def up
    remove_column :tracks, :track_path
  end

  def down
    add_column :tracks, :track_path, :string
  end
end
