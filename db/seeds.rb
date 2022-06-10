require 'faker'

puts "🌱 Seeding spices..."
puts 'Seeding departments..'
Department.create(name: 'Anesthesiology')
Department.create(name: 'Cardiology')
Department.create(name: 'Ear, Nose, and Throat (ENT)')
Department.create(name: 'Pediactrics')
Department.create(name: 'Emergency Medicine')
Department.create(name: 'General Surgery')
Department.create(name: 'Hematology')
Department.create(name: 'Oncology')
Department.create(name: 'Vascular')
Department.create(name: 'Neurology')

puts 'Seeding doctors..'
Doctor.create(title: 'MD', name: 'Patch Adams', bio: Faker::Movies::Hobbit.quote, department_id: 10, email: 'patchadams@flatironmed.edu', password: '123')
25.times do
  Doctor.create(
    title: 'MD',
    name: Faker::Movies::LordOfTheRings.character,
    bio: Faker::Movies::Hobbit.quote,
    department_id: rand(1..Department.all.size),
    email: "#{Faker::Internet.username}@flatironmed.edu",
    password: Faker::Internet.password
  )
end
25.times do
  Doctor.create(
    title: 'DO',
    name:Faker::Movies::LordOfTheRings.character,
    bio: Faker::Movies::Hobbit.quote,
    department_id: rand(1..Department.all.size),
    email: "#{Faker::Internet.username}@flatironmed.edu",
    password: Faker::Internet.password
  )
end

puts 'Seeding patients..'
75.times do
  Patient.create(
    name: Faker::Movies::LordOfTheRings.character,
    age: rand(18..65),
    birthdate: Faker::Date.birthday(min_age: 18, max_age: 65)
  )
end

15.times do
  Room.create(
    text: Faker::Movies::LordOfTheRings.location,
    color: Faker::Color.color_name
  )
end

puts 'Seeding appointments..'
50.times do
  Appointment.create(
    doctor_id: 1,
    patient_id: rand(1..Patient.all.size),
    title: Faker::Fantasy::Tolkien.poem,
    room_id: rand(1..Room.all.size),
    startDate: DateTime.new(2022,6,rand(1..30),rand(1..19),rand(1.60)).strftime('%a %b %d %Y %H:%M:%S GMT-0400 (Eastern Daylight Time)'),
    endDate: DateTime.new(2022,6,rand(1..30),rand(6..19),rand(1.60)).strftime('%a %b %d %Y %H:%M:%S GMT-0400 (Eastern Daylight Time)'),
    notes: ''
  )
end
puts "🌱 Seeding done..."
