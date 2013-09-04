# encoding: utf-8

class TrackUploader < CarrierWave::Uploader::Base

  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end


  # process :guess_track

  def guess_track
    binging.pry
    result = JSON.parse(`echoprint-codegen #{path}`)
    model.title = result.first["metadata"]["title"]
    model.artist = result.first["metadata"]["artist"]

    # Go find two 'wrong answers' for our quiz
    url = "http://developer.echonest.com/api/v4/artist/similar?api_key=UJ6VUETJ7VUYJAFHB&name=#{model.artist}&format=json&results=1&start=0"
    results = HTTParty.get(url)
    model.wrong_answer_1, model.wrong_answer_2 = results["response"]["artists"].sample(2).map {|a| a["name"]}
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process :scale => [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process :scale => [50, 50]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  # def extension_white_list
  #   %w(jpg jpeg gif png)
  # end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end

end
