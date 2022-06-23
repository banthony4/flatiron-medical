require 'faker'

puts "🌱 Seeding spices..."
puts 'Seeding departments..'
Department.create(name: 'Anesthesiology', image: 'https://www.teamhealth.com/wp-content/uploads/2020/05/TH-12623-June-Blog_CAA2_Blog.jpg')
Department.create(name: 'Cardiology', image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/248/248935/cardiology-cath-lab.jpg')
Department.create(name: 'Ear, Nose, and Throat (ENT)', image: 'https://www.harleystreetent.com/sites/default/files/field/image/when-should-you-see-an-ent-specialist.jpg')
Department.create(name: 'Pediactrics', image: 'https://www.communitycare.com/Content/images/Clifton-Park-Pediatrics-On-Site-Services-1200x600.jpg')
Department.create(name: 'Emergency Medicine', image: 'https://college.mayo.edu/media/mccms/content-assets/academics/residencies-and-fellowships/programs-a-z/emergency-medicine-3602650-0053.jpg')
Department.create(name: 'General Surgery', image: 'https://www.facs.org/media/hsppzco1/532331964.jpg?anchor=center&mode=crop&rnd=132954458115670000')
Department.create(name: 'Hematology', image: 'https://www.morainevalley.edu/wp-content/uploads/2021/12/D694PHL033-700x467.jpg')
Department.create(name: 'Oncology', image: 'https://d7fi61gsgzcz4.cloudfront.net/assets/impact-hero-images/gettyimages-961287944_2500.jpg/dynamic:1-aspect:2.5-fit:cover-strategy:entropy/gettyimages-961287944_2500--1800.jpg')
Department.create(name: 'Vascular', image: 'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2019/06/10/17/57/vascular-surgery-8col-3861762-0036.jpg')
Department.create(name: 'Neurology', image: 'https://www.amc.edu/patient/services/neurosciences/neurology/images/neuro.jpg')

puts 'Seeding doctors..'
Doctor.create(title: 'MD', name: 'Patch Adams', bio: Faker::Movies::Hobbit.quote, department_id: 10, email: 'patchadams@flatironmed.edu', password: '123', doc: true)
15.times do
  Doctor.create(
    title: 'MD',
    name: Faker::Movies::LordOfTheRings.character,
    bio: Faker::Movies::Hobbit.quote,
    department_id: rand(1..Department.all.size),
    email: "#{Faker::Internet.username}@flatironmed.edu",
    password: Faker::Internet.password,
    doc: true
  )
end
15.times do
  Doctor.create(
    title: 'DO',
    name:Faker::Movies::LordOfTheRings.character,
    bio: Faker::Movies::Hobbit.quote,
    department_id: rand(1..Department.all.size),
    email: "#{Faker::Internet.username}@flatironmed.edu",
    password: Faker::Internet.password,
    doc: true
  )
end

puts 'Seeding patients..'
Patient.create(name: "Ben Anthony", age: rand(18..65), birthdate: Faker::Date.birthday(min_age: 18, max_age: 65), email: "ba1@gmail.com", password: "123", doc: false)
20.times do
  Patient.create(
    name: Faker::Movies::LordOfTheRings.character,
    age: rand(18..65),
    birthdate: Faker::Date.birthday(min_age: 18, max_age: 65),
    email: Faker::Internet.free_email,
    password: Faker::Internet.password,
    doc: false
  )
end

# .strftime('%a %b %d %Y %H:%M:%S GMT-0400 (Eastern Daylight Time)')
puts 'Seeding appointments..'
50.times do
  Appointment.create(
    doctor_id: 1,
    patient_id: rand(1..Patient.all.size),
    title: Faker::Movie.title,
    location: Faker::Movies::LordOfTheRings.location,
    startDate: DateTime.new(2022,6,rand(1..30),rand(1..19),rand(1.60)),
    endDate: DateTime.new(2022,6,rand(1..30),rand(6..19),rand(1.60)),
    notes: Faker::Fantasy::Tolkien.poem
  )
end

puts 'Seeding results..'
5.times do 
  Result.create(
    WBC: rand(3.5..10.5),
    RBC: rand(4.5..6.0),
    hemoglobin: rand(14.0..18.0),
    hematocrit: rand(42.0..52.0),
    platelets: rand(140..415),
    sodium: rand(134..144),
    potassium: rand(3.5..5.2),
    bun: rand(9..20),
    calcium: rand(8.7-10.2),
    patient_id: 1,
    test_date: DateTime.new(2022,6,rand(1..30),rand(1..19),rand(1.60))
  )
end
puts "🌱 Seeding done..."
