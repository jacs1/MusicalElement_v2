class CreateArtistImages < ActiveRecord::Migration
  def change
    create_table :artist_images do |t|
      t.integer :artist_id
      t.string :image

      t.timestamps
    end
  end
end
