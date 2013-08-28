class ArtistImagesController < ApplicationController

  def new
    binding.pry
    @artist_image = ArtistImage.new
  end


  def index
    # @artists = current_user.library.lib_filter(params[:controller])
    @artist_images = ArtistImage.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @artist_images }
    end
  end

  def show
    @artist_image = ArtistImage.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @artist_image }
    end
  end

  def edit
    # binding.pry
    @artist_images = artist_images.find(params[:id])
  end

  def update
    @artist_image = ArtistImage.find(params[:id])
      if @artist_image.update_attributes(params[:artist_images])
        redirect_to @artist_image, notice: "Successfully updated artist_images."
      else
        render :edit
      end
  end

  def create
    binding.pry
    @artist_image = ArtistImage.create(params[:image])
  end



end
