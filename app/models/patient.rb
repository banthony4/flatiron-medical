class Patient < ApplicationRecord
  has_secure_password

  has_many :appointments, dependent: :nullify
  has_many :doctors, through: :appointments

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true

end
