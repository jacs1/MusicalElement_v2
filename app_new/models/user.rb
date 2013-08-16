class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

attr_accessible :email, :password, :password_confirmation, :remember_me, :age, :name, :library_id, :avatar, :status, :commentable_id, :commentable_type

has_one :library
has_many :friendships
has_many :tracks
has_many :comments
has_many :user_playlists
has_many :playlists, :through => :user_playlists

end
