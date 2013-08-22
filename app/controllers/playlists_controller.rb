class PlaylistsController < ApplicationController

    before_filter :load_library

    def index
      @playlists = current_user.library.playlists
      respond_to do |format|
        format.html # index.html.erb
        format.json { render json: @playlists }
      end
    end

    def new
      # binding.pry
      @playlist = Playlist.new

      # binding.pry
      # @tracks = current_user.library.tracks
      respond_to do |format|
        format.html # new.html.erb
        format.json { render json: @playlist }
      end
    end

    def show
      @library = Library.find(params[:library_id])
      @playlist = Playlist.find(params[:id])
      @commentable = @playlist
      @comments = @commentable.comments
      @comment = Comment.new

      respond_to do |format|
        format.html # show.html.erb
        format.json { render json: @playlist }
      end
    end

    def edit
      # binding.pry
    end

    def create
      # binding.pry
      @playlist = Playlist.new(params[:playlist])
      @playlist.libraries << @library
      # binding.pry
      if @playlist.save
        format.html { redirect_to playlist_track_path(@playlist, @playlist), notice: 'Track was successfully created.' }
        format.json { render json: @playlist_track, status: :created, location: @playlist }
      else
        format.html { render action: "new" }
        format.json { render json: @playlist.errors, status: :unprocessable_entity }
      end
    end

    def destroy
      @playlist = Playlist.find(params[:id])
      @playlist.destroy

      respond_to do |format|
        format.html { redirect_to library_playlists_url }
        format.json { head :no_content }

    end
  end
    def update
      @playlist = Playlist.find(params[:id])
      @playlist.save
      #binding.pry
      redirect_to library_playlist_path(@playlist)

    end



    protected
    def load_library
      @library = Library.find(params[:library_id])
      @tracks = current_user.library.tracks
    end

    
end
