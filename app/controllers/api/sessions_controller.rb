class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      render json: ["Wrong email/ password or password too short"], status: 401
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
