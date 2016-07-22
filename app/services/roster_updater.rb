require 'csv'

class RosterUpdater

  def self.build_roster
    CSV.foreach('lib/fixtures/employee_roster.csv', headers: :true) do |row|       
     department = Department.find_by(name: row['Department'])
     Employee.find_or_create_by(name: row['First Name'] + " " + row['Last Name'], email: row['Email'], department: department)
   end
  end

end
