# Coffee Roulette

## About

The intent of this project is to build and app that will automatically pair and email people once a month. This is being set up so that people in the company will be able to set aside some block of time to meet some one new.

The MVP of the project doesn't need any views, just the ability to take in employees (API or manually via command line) and send out emails to them once a month about who they are paired with.

## Getting the app started

 - Fork this repo, and clone it down to your local machine
 - `bundle install` - to get all the necessary gems
 - `bundle exec figaro install` - to get figaro installed
 - Add the following to your config/application.yml file to get the mailer to work (note, this file may be hidden in your text editor and you may need to change your settings to see your gitignored files):

 ```
 gmail_username: 'your_gmail@gmail.com'
 gmail_password: 'your_gmail_password'
 ```

 - `rake db:migrate` - to run all of the migrations
 - Optional: `rake db:seed` - uses Faker load up 5 random departments and 70 random employees. Create 12 coffee dates for each employee for the past 12 months. Note: seeding 12 months of coffee dates may take 10 - 20 seconds.

Start app with `rake start`

## To do:

### Set up mailer

Edit email view for text & html format.

### Get site hosted on a server

Digital Ocean? Do we have an existing partnership?

Heroku? Free, but will it activate once a month to run the tasks?

### Set up task to run once a month

Use clockwork gem?
