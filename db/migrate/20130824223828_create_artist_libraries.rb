class CreateArtistLibraries < ActiveRecord::Migration
  def change
    create_table :artist_libraries do |t|
      t.integer :artist_id
      t.integer :library_id

      t.timestamps
    end
  end
end
