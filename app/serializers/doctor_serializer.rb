class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :title, :name, :bio, :email, :doc
end
