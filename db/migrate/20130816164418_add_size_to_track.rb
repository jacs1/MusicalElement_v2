class AddSizeToTrack < ActiveRecord::Migration
  def change
    add_column :tracks, :size, :float
  end
end
