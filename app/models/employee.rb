class Employee < ActiveRecord::Base
  belongs_to :department
  has_many :guest_lists
  has_many :employees, through: :guest_lists
  has_many :coffee_dates, through: :guest_lists
  has_many :months, through: :coffee_dates
  scope :active, -> { where(active: true) }

  def department_attributes=(attributes)
    binding.pry
  end

  def previous_coffee_mates
    emps = coffee_dates.collect { | coffee_date | coffee_date.employees }
    emps.flatten.tap { | e | e.delete(self) }
  end
  
  def toggleActive
    self.update(active: !self.active)
    self
  end
  
end
