class AlbumsController < ApplicationController

  def index
    # @albums = current_user.library.lib_filter(params[:controller])
    @albums = current_user.library.albums
    # binding.pry
    @albums.uniq!
    respond_to do |format|
      format.html # index.html.erb
      format.js
      format.json { render json: @albums }
    end
  end

  def new
  end

  def show
    @album = Album.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.js
      format.json { render json: @album }
    end
  end

  def create
  end

  def edit
    @album = Album.find(params[:id])
  end

  def update
    @album = Album.find(params[:id])
      if @album.update_attributes(params[:album])
        redirect_to @album, notice: "Successfully updated album."
      else
        render :edit
      end
  end

  def destroy
  end

end
