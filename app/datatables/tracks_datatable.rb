class TracksDatatable
  delegate :params, :h, :link_to, :track_path, to: :@view

  def initialize(view)
    @view = view
    # binding.pry
  end

  def as_json(options = {})
    {
      sEcho: params[:sEcho].to_i,
      iTotalRecords: Track.count,
      iTotalDisplayRecords: tracks.total_entries,
      aaData: data
    }
  end

private

  def data
    tracks.map do |track|
      [
        h(track.album.artist.name),
        h(track.title),
        h(track.artists.map{ |a| [a][0].name }.join(", ")),
        h(track.album.name),
        h(track.genre.name),
        h(track.year),
        h("#{((track.length / 60) % 60)}:""#{(track.length % 60)}"),
        # h(((track.length / 60) % 60) (track.length % 60)),
        h(track.size),
        h(track.bpm),
        link_to('Destroy', @view.library_track_path(params[:library_id], track.id), :method => 'delete', data: { confirm: 'Are you sure?' })
        # link_to("Delete", track, method: :delete, data: { confirm: 'Are you sure?' })
        # link_to(image_tag('icons/edit.png', :title => "Edit " +page.name), edit_page_path(page)) + "  " + link_to(image_tag('icons/show.png', :title => "Show " +page.name), show_page_path(page)) + "  " + link_to(image_tag('icons/delete.png', :title => "Delete " +page.name), page, method: :delete, data: { confirm: 'Are you sure?' })
      ]
      binding.pry
    end
  end

  def tracks
    @tracks ||= fetch_tracks
  end

  def fetch_tracks
    tracks = Track.order("#{sort_column} #{sort_direction}")
    tracks = tracks.page(page).per_page(per_page)
    if params[:sSearch].present?
      tracks = tracks.where("artists like :search or category like :search", search: "%#{params[:sSearch]}%")
    end
    tracks
  end

  def page
    params[:iDisplayStart].to_i/per_page + 1
  end

  def per_page
    params[:iDisplayLength].to_i > 0 ? params[:iDisplayLength].to_i : 10
  end

  def sort_column
    columns = %w[title Featured_Artist Album Genre Year Length Size BPM]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "desc" : "asc"
  end


end

