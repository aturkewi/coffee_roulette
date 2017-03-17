class EmployeesController < ApplicationController
  
  protect_from_forgery :except => [:update]
  
  def index
    render json: Employee.all
  end
  
  def create
    employee = Employee.new(employee_params)
    if empoyee.save
      render json: {message: 'Got it'}
    else
      # render json: {empoyee.errors}
      render json: {message: 'error'}
    end
  end
  
  def update
    employee = Employee.find_by(id: params["id"])
    employee.toggleActive
    render json: employee
  end
  
  def count
    render json: {count: Employee.count}
  end
  
  private
  
  def employee_params
    params.require(:employee).permit(:name, :email, department_attributes:[:name])
  end
  
end