class AddTrackIdToGenre < ActiveRecord::Migration
  def change
    add_column :genres, :track_id, :integer
  end
end
