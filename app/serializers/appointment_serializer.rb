class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :startDate, :endDate, :title, :location, :doctor_id, :patient_id, :notes
end
