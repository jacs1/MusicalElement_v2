class ArtistsController < ApplicationController

  def index
    # @artists = current_user.library.lib_filter(params[:controller])
    @artists = current_user.library.artists
    @artists.uniq!
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @artists }
    end
  end

  def show
    @artist = Artist.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @artist }
    end
  end

  def edit
    # binding.pry
    @artist = Artist.find(params[:id])
  end

  def update
    @artist = Artist.find(params[:id])
    if params[:artist_image] 
      @artist.artist_images << params[:artist_image]
    end
    binding.pry
      if @artist.update_attributes(params[:artist])
        redirect_to @artist, notice: "Successfully updated artist."
      else
        render :edit
      end
  end

  
end
