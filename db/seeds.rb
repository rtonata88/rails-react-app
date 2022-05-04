# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
greeting1 = Greeting.create(language: "Spanish", greeting: "Hola")
greeting2 = Greeting.create(language: "English", greeting: "Hello")
greeting3 = Greeting.create(language: "Portuguese", greeting: "Olá")
greeting4 = Greeting.create(language: "German", greeting: "Guten Morgen!")
greeting5 = Greeting.create(language: "Russian", greeting: "Здравствуйте!")