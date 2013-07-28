class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :track_path
      t.integer :track_number
      t.string :year
      t.integer :bpm
      t.integer :length
      t.integer :size
      t.integer :user_id
      t.integer :genre_id

      t.timestamps
    end
  end
end
