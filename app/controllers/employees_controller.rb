class EmployeesController < ApplicationController
  
  protect_from_forgery :except => [:update]
  
  def index
    render json: Employee.all
  end
  
  def update
    binding.pry
    render json: {message: 'Got it!'}
  end
  
end