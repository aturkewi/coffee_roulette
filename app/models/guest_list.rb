class GuestList < ActiveRecord::Base
  belongs_to :employee
  belongs_to :coffee_date
  delegate :department, to: :employee
  delegate :month, to: :coffee_date
end
