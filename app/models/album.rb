class Album < ActiveRecord::Base
  attr_accessible :description, :image, :name, :release, :artist_attributes

  belongs_to :artist

  has_many :tracks
  has_many :libraries, :through => :album_libraries
  has_many :album_libraries

  accepts_nested_attributes_for :artist

  # def as_json(options = {})
  #   binding.pry
  #   super({ :include=> {:tracks => {:include=> {:artists}}} }.merge(options || {}))
  # end


# (:include=> {:interaction_outline=> {:include=> {:tree_node=> {:include=> :definition}}}, :token_outline=> {:include=> {:tree_node=> 

  # def index
  #     @posts = Post.all
  #     respond_with(@posts) do |format|
  #       format.json { render :json => @posts.to_json(
  #          :only => [:title, :body, :created_at, :tags, :category],
  #          :include => [ :likes => { :only => [:created_at], :include => [:author] }, :comments => { only => [:created_at, :body], :include => [:author]  }, :user => { :only => [:first_name, :last_name}, :methods => [:full_name] },
  #          :methods => [:likes_count, :comments_count])
  #       }
  #     end
  #   end
  
end
