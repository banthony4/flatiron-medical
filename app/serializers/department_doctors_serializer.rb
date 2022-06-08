class DepartmentDoctorsSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :doctors
end
