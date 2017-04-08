class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate
  
  def create
    binding.pry
    User.create(user_params)
    render :json => {message: "Success!"}
  end
  
  private
  
  def user_params
    params.permit(:name, :username, :email, :password, :passwordConfirmation)
  end
  
end
