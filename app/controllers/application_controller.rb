class ApplicationController < ActionController::Base
  # protect_from_forgery with: :null_session

  helper_method :current_user, :signed_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    @@current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout(user)
    user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end


  def require_signed_in
    unless current_user
      render json: {base: ['invalid credentials']}, status: 401
    end
  end

end
