# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Employee.destroy_all
Department.destroy_all

# create departments
5.times do
  FactoryGirl.create(:department)
end
70.times do
  rand_dept = Department.all.sample
  FactoryGirl.create(:employee, department: rand_dept)
end
# engineering = Department.create(name:"Engineering")
# online_education = Department.create(name:"Online Education")
# in_person_education = Department.create(name:"In Person Education")
# admissions = Department.create(name:"Admissions")
# curriculum = Department.create(name:"Curriculum")

# create some employees
# avidor = Employee.create(name:"Avidor", email:"avi@test.com", department:online_education)
# antoin = Employee.create(name:"Antoin", email:"antoin@test.com", department:in_person_education)
