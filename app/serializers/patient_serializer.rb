class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :birthdate, :total_appts, :doc

  def total_appts
    object.appointments.size
  end

end
