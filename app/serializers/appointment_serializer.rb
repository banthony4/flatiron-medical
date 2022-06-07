class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :start_time, :end_time
  has_one :patient
  has_one :doctor
end
