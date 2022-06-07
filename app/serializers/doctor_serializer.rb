class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :title, :name, :bio, :email, :password_digest
  has_one :department
end
