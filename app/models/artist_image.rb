class ArtistImage < ActiveRecord::Base
  attr_accessible :artist_id, :image

  mount_uploader :image, ArtistImageUploader
  
  belongs_to :artist, :polymorphic => true

  #one convenient method to pass jq_upload the necessary information
  def to_jq_upload
  {
    "name" => read_attribute(:image),
    "size" => image.size,
    "url" => image.url,
    "thumbnail_url" => image.thumb.url,
    "delete_url" => image_path(:id => id),
    "delete_type" => "DELETE" 
   }
  end
  
end
