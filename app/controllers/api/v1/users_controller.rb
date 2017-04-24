class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate
  
  def create
    user = User.create(user_params)
    jwt = Auth.issue({user: user.id})
    render :json => {jwt: jwt}
  end
  
  private
  
  def user_params
    params.permit(:name, :username, :email, :password, :passwordConfirmation)
  end
  
end
