class AlbumsController < ApplicationController

  def index
    # binding.pry
    @albums = current_user.library.lib_filter(params[:controller])
    @albums.uniq!
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @albums }
    end
  end

  def new
  end

  def show
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
