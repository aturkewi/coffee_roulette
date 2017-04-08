class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate
  
  def create
    binding.pry
    render :json => {message: "Success!"}
  end
  
  def pry
    puts "Just trying to hit a pry here"
  end
  
end
