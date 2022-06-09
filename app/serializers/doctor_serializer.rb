class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :title, :name, :bio, :email
  has_many :appointments
end
