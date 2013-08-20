class TracksController < ApplicationController

  before_filter :load_library

    def index      
      @tracks = current_user.library.tracks
      respond_to do |format|
      format.html # index.html.erb
      format.json { render json: TracksDatatable.new(view_context) }
      # format.json { render json: @tracks }
    end
  end



  # def index
  #   respond_to do |format|
  #     format.html
  #     format.json { render json: ProductsDatatable.new(view_context) }
  #   end
  # end



  def new
    # binding.pry
    @track = Track.new
    # @artist = Artist.new
    # respond_to do |format|
    #   format.html # new.html.erb
    #   format.json { render json: @track }
    # end
  end

  def create
    # binding.pry
    @track = Track.new(params[:track])
    # binding.pry
    @track.library = @library
    @track.parse_id3(@track)
    respond_to do |format|
      if @track.save

        format.html { redirect_to library_track_path(@library, @track), notice: 'Track was successfully created.' }
        format.json { redirect_to library_tracks_path, status: :created }
        # format.json { render json: @library_track, status: :created, location: @track }
      else
        format.html { render action: "new" }
        format.json { render json: @track.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
    @track = Track.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @track }
    end
  end

  def destroy
    # binding.pry
    @track = Track.find(params[:id])
    @track.destroy

    respond_to do |format|
      format.html { redirect_to library_tracks_url }
      format.json { redirect_to library_tracks_url }
    end
  end

  def update
    @track = Track.new(params[:track])
    @track.libraries << @library
    @track.parse_id3(@track)

    respond_to do |format|
      if @track.save

        format.html { redirect_to library_track_path(@library, @track), notice: 'Track was successfully created.' }
        format.json { render json: @library_track, status: :created, location: @track }
      else
        format.html { render action: "new" }
        format.json { render json: @track.errors, status: :unprocessable_entity }
      end
    end
  end

  def land
  end





  protected
  def load_library
    @library = Library.find(current_user.library.id)
  end


end
