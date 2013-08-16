class RemoveSizeFromTrack < ActiveRecord::Migration
  def up
    remove_column :tracks, :size
  end

  def down
    add_column :tracks, :size, :integer
  end
end
