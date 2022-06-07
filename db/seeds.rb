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
Doctor.create(title: 'MD', name: 'Patch Adams', bio: Faker::Movies::BackToTheFuture.quote, department_id: 10, email: 'patchadams@flatironmed.edu', password: '123')
25.times do
  Doctor.create(
    title: 'MD',
    name: Faker::Name.name,
    bio: Faker::Movies::BackToTheFuture.quote,
    department_id: rand(1..Department.all.size),
    email: "#{Faker::Internet.username}@flatironmed.edu",
    password: Faker::Internet.password
  )
end
25.times do
  Doctor.create(
    title: 'DO',
    name: Faker::Name.name,
    bio: Faker::Movies::BackToTheFuture.quote,
    department_id: rand(1..Department.all.size),
    email: "#{Faker::Internet.username}@flatironmed.edu",
    password: Faker::Internet.password
  )
end

puts 'Seeding patients..'
75.times do
  Patient.create(
    name: Faker::Name.name,
    age: rand(18..65),
    birthdate: Faker::Date.birthday(min_age: 18, max_age: 65)
  )
end

puts 'Seeding appointments..'
10.times do
  Appointment.create(
    doctor_id: rand(1..Doctor.all.size),
    patient_id: rand(1..Patient.all.size),
    start_date: Faker::Date.between(from: '2022-06-01', to: '2022-06-04'),
    start_time: Faker::Time.between(from: DateTime.now - 6, to: DateTime.now + 5, format: :short),
    end_time: Faker::Time.between(from: DateTime.now - 6, to: DateTime.now + 5, format: :short)
  )
end
10.times do
  Appointment.create(
    doctor_id: rand(1..Doctor.all.size),
    patient_id: rand(1..Patient.all.size),
    start_date: Faker::Date.between(from: '2022-06-5', to: '2022-06-11'),
    start_time: Faker::Time.between(from: DateTime.now - 6, to: DateTime.now + 5, format: :short),
    end_time: Faker::Time.between(from: DateTime.now - 6, to: DateTime.now + 5, format: :short)
  )
end
10.times do
  Appointment.create(
    doctor_id: rand(1..Doctor.all.size),
    patient_id: rand(1..Patient.all.size),
    start_date: Faker::Date.between(from: '2022-06-12', to: '2022-06-18'),
    start_time: Faker::Time.between(from: DateTime.now - 6, to: DateTime.now + 5, format: :short),
    end_time: Faker::Time.between(from: DateTime.now - 6, to: DateTime.now + 5, format: :short)
  )
end
10.times do
  Appointment.create(
    doctor_id: rand(1..Doctor.all.size),
    patient_id: rand(1..Patient.all.size),
    start_date: Faker::Date.between(from: '2022-06-19', to: '2022-06-25'),
    start_time: Faker::Time.between(from: DateTime.now - 6, to: DateTime.now + 5, format: :short),
    end_time: Faker::Time.between(from: DateTime.now - 6, to: DateTime.now + 5, format: :short)
  )
end
10.times do
  Appointment.create(
    doctor_id: rand(1..Doctor.all.size),
    patient_id: rand(1..Patient.all.size),
    start_date: Faker::Date.between(from: '2022-06-26', to: '2022-07-02'),
    start_time: Faker::Time.between(from: DateTime.now - 6, to: DateTime.now + 5, format: :short),
    end_time: Faker::Time.between(from: DateTime.now - 6, to: DateTime.now + 5, format: :short)
  )
end

puts "🌱 Seeding done..."
