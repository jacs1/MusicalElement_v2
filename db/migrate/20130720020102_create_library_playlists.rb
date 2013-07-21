class CreateLibraryPlaylists < ActiveRecord::Migration
  def change
    create_table :library_playlists do |t|
      t.integer :library_id
      t.integer :playlist_id

      t.timestamps
    end
  end
end
