class ArtistsController < ApplicationController

  def index
    @artists = current_user.library.lib_filter(params[:controller])
    # binding.pry
    @artists.uniq!
    # binding.pry
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

  
end
