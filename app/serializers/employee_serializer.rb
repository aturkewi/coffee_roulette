class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :department_id, :active
end
