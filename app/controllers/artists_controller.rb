class ArtistsController < ApplicationController

    def index
    # binding.pry
    @tracks = current_user.library.tracks
    @artists = []
    @tracks.each do |a|
      a.artists.each do |i|
      @artists << i
      end      
    end
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
