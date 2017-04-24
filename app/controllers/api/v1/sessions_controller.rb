class Api::V1::SessionsController < ApplicationController
  skip_before_action :authenticate
  
  def create
    user = User.find_by(email: user_params[:email])
    if user && user.authenticate(user_params[:password])
      jwt = Auth.issue({user: user.id})
      render :json => {jwt: jwt}
    else
      render :json => {error: 'username and password do not match', status: 400}, status: 400
    end
  end
  
  private
  
  def user_params
    params.permit(:email, :password)
  end
  
end
