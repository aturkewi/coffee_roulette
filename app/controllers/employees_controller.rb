class EmployeesController < ApplicationController
  
  protect_from_forgery :except => [:update]
  
  def index
    render json: Employee.all
  end
  
  def create
    render json: {message: 'Got it'}
  end
  
  def update
    employee = Employee.find_by(id: params["id"])
    employee.toggleActive
    render json: employee
  end
  
end