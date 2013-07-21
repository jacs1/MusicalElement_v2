class ApplicationController < ActionController::Base
  protect_from_forgery

  def after_sign_in_path_for(user)
    # binding.pry
    if current_user.library == nil
      new_library_path
    else
      root_path
    end
  end

end
