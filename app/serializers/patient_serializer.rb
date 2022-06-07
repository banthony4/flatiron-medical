class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :birthdate
end
