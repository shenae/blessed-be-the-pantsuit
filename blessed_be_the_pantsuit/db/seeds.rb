# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Politician.delete_all

politicians = Politician.create([

{
    "short_title": "Sen.",
    "first_name": "Tammy",
    "last_name": "Baldwin",
    "gender": "F",
    "party": "D",
    "twitter_account": "SenatorBaldwin",
    "url": "https://www.baldwin.senate.gov",
    "contact_form": "https://www.baldwin.senate.gov/feedback",
    "state": "WI"
},

{
    "short_title": "Sen.",
    "first_name": "Kirsten",
    "last_name": "Gillibrand",
    "gender": "F",
    "party": "D",
    "twitter_account": "SenGillibrand",
    "url": "https://www.gillibrand.senate.gov",
    "contact_form": "http://www.gillibrand.senate.gov/contact/",
    "state": "NY"
},

{
    "short_title": "Sen.",
    "first_name": "Kamala",
    "last_name": "Harris",
    "gender": "F",
    "party": "D",
    "twitter_account": "SenKamalaHarris",
    "url": "https://www.harris.senate.gov",
    "contact_form": "https://www.harris.senate.gov/content/contact-senator",
    "state": "CA"
},
{
    "short_title": "Sen.",
    "first_name": "Elizabeth",
    "last_name": "Warren",
    "gender": "F",
    "party": "D",
    "twitter_account": "SenWarren",
    "url": "https://www.warren.senate.gov",
    "contact_form": "https://www.warren.senate.gov/?p=email_senator",
    "state": "MA"
},
{
    "short_title": "Rep.",
    "first_name": "Alexandria",
    "last_name": "Ocasio-Cortez",
    "gender": "F",
    "party": "D",
    "twitter_account": "RepAOC",
    "url": "https://ocasio-cortez.house.gov/",
    "contact_form": "https://ocasio-cortez.house.gov/contact",
    "state": "NY"
}

]);
