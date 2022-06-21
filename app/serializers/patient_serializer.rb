class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :birthdate, :total_appts
  has_many :appointments

  def total_appts
    object.appointments.size
  end

end
