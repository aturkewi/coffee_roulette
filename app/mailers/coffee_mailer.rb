class CoffeeMailer < ApplicationMailer

  def coffee_pairing(employee1, employee2)
    @employee1 = employee1
    @employee2 = employee2

    mail(to: @employee1.email, cc: @employee2.email, subject: 'You two, are going on a date, well sort of.')
  end

end
