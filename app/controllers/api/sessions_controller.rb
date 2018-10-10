class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    debugger

    if @user
      debugger
      sign_in(@user)
      debugger
      render "api/users/show"
    else
      render json: ["Wrong email/ password"], status: 401
    end

  end

  def destroy
    @user = current_user
    if @user
      logout(@user)
      render "api/users/show"
    else
      render json:["Not signed in"], status: 404
    end

  end

end
