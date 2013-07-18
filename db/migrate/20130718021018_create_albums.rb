class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.integer :artist_id
      t.text :description
      t.string :image
      t.string :name
      t.date :release

      t.timestamps
    end
  end
end
