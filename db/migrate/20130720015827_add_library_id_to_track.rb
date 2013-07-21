class AddLibraryIdToTrack < ActiveRecord::Migration
  def change
    add_column :tracks, :library_id, :integer
  end
end
