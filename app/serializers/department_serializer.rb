class DepartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  has_many :doctors

end
