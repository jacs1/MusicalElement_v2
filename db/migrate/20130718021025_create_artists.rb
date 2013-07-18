class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.integer :age
      t.string :artist_type
      t.date :birthday
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :name
      t.integer :image_id

      t.timestamps
    end
  end
end
