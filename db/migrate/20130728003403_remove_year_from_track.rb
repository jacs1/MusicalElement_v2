class RemoveYearFromTrack < ActiveRecord::Migration
  def up
    remove_column :tracks, :year
  end

  def down
    add_column :tracks, :year, :date
  end
end
