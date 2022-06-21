class Patient < ApplicationRecord
  has_secure_password

  has_many :appointments, dependent: :nullify
  has_many :doctors, through: :appointments
  has_many :results

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true

end
