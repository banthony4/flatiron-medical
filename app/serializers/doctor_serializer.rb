class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :title, :name, :bio, :email, :doc
  has_many :appointments
end
