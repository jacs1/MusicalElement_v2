class CreateLibraries < ActiveRecord::Migration
  def change
    create_table :libraries do |t|
      t.integer :album_id
      t.string :image
      t.string :name
      t.integer :playlist_id
      t.integer :track_id
      t.integer :user_id

      t.timestamps
    end
  end
end
