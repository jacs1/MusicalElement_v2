class RemoveAlbumIdFromTrack < ActiveRecord::Migration
  def up
    # remove_column :tracks, :album_id
  end

  def down
    # add_column :tracks, :album_id, :integer
  end
end
