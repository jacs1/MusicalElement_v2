class CreateAlbumLibraries < ActiveRecord::Migration
  def change
    create_table :album_libraries do |t|
      t.integer :album_id
      t.integer :library_id

      t.timestamps
    end
  end
end
