class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :name
      t.integer :track_position
      t.integer :user_id
      t.integer :library_id
      t.boolean :private

      t.timestamps
    end
  end
end
