class AddBiographyToArtist < ActiveRecord::Migration
  def change
    add_column :artists, :biography, :text
  end
end
