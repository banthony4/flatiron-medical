class Department < ApplicationRecord
  has_many :doctors, dependent: :nullify
  
end
