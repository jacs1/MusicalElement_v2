class ArtistsController < ApplicationController

  def index
    # @artists = current_user.library.lib_filter(params[:controller])
    @artists = current_user.library.artists
    @artists.uniq!
    respond_to do |format|
      format.html # index.html.erb
      format.js
      format.json { render json: @artists }
    end
  end

  def show
    @artist = Artist.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.js
      format.json { render json: @artist }
    end
  end

  def edit
    @artist = Artist.find(params[:id])
  end

  def update
    @artist = Artist.find(params[:id])
    if @artist.update_attributes(params[:artist])
      redirect_to @artist, notice: "Successfully updated Artist."
    else
      render :edit
    end
  end

  def albums
    @artist = Artist.find(params[:id])
    respond_to do |format|
      # format.html # show.html.erb
      format.js
    # binding.pry
    end
  end

  def new
    binding.pry
  end

  
end
