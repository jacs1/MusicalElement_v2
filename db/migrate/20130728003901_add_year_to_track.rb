class AddYearToTrack < ActiveRecord::Migration
  def change
    add_column :tracks, :year, :string
  end
end
