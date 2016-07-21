require 'csv'

class RosterUpdater

  def self.build_roster
    CSV.foreach('lib/fixtures/employee_roster.csv', headers: :true) do |row|     
     Employee.find_or_create_by(name: row['First Name'] + " " + row['Last Name'], email: row['Email'])
   end
  end

end
