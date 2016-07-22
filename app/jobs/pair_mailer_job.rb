class PairMailerJob < ActiveJob::Base
  queue_as :default

  def perform(employee1, employee2)
    CoffeeMailer.coffee_pairing(employee1, employee2)
  end
end
