# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130828164416908) do

  create_table "album_libraries", :force => true do |t|
    t.integer  "album_id"
    t.integer  "library_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "album_tracks", :force => true do |t|
    t.integer  "album_id"
    t.integer  "track_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "albums", :force => true do |t|
    t.integer  "artist_id"
    t.text     "description"
    t.string   "image"
    t.string   "name"
    t.string   "release"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.integer  "track_id"
  end

  create_table "artist_images", :force => true do |t|
    t.integer  "artist_id"
    t.string   "image"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "artist_libraries", :force => true do |t|
    t.integer  "artist_id"
    t.integer  "library_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "artist_tracks", :force => true do |t|
    t.integer  "artist_id"
    t.integer  "track_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "artists", :force => true do |t|
    t.integer  "age"
    t.string   "artist_type"
    t.date     "birthday"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "gender"
    t.string   "name"
    t.integer  "image_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.text     "biography"
  end

  create_table "genres", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "track_id"
  end

  create_table "libraries", :force => true do |t|
    t.integer  "album_id"
    t.string   "image"
    t.string   "name"
    t.integer  "playlist_id"
    t.integer  "track_id"
    t.integer  "user_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "library_playlists", :force => true do |t|
    t.integer  "library_id"
    t.integer  "playlist_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "playlist_tracks", :force => true do |t|
    t.integer  "playlist_id"
    t.integer  "track_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "playlists", :force => true do |t|
    t.string   "name"
    t.integer  "track_position"
    t.integer  "user_id"
    t.integer  "library_id"
    t.boolean  "private"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  create_table "rates", :force => true do |t|
    t.integer  "rater_id"
    t.integer  "rateable_id"
    t.string   "rateable_type"
    t.float    "stars",         :null => false
    t.string   "dimension"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "rates", ["rateable_id", "rateable_type"], :name => "index_rates_on_rateable_id_and_rateable_type"
  add_index "rates", ["rater_id"], :name => "index_rates_on_rater_id"

  create_table "rating_caches", :force => true do |t|
    t.integer  "cacheable_id"
    t.string   "cacheable_type"
    t.float    "avg",            :null => false
    t.integer  "qty",            :null => false
    t.string   "dimension"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  add_index "rating_caches", ["cacheable_id", "cacheable_type"], :name => "index_rating_caches_on_cacheable_id_and_cacheable_type"

  create_table "tracks", :force => true do |t|
    t.string   "title"
    t.integer  "track_number"
    t.string   "year"
    t.integer  "bpm"
    t.integer  "length"
    t.integer  "user_id"
    t.integer  "genre_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
    t.integer  "library_id"
    t.integer  "album_id"
    t.float    "size"
    t.string   "track_location"
  end

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
