class AddTrackIdToAlbum < ActiveRecord::Migration
  def change
    add_column :albums, :track_id, :integer
  end
end
