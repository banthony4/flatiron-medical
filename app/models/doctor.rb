class Doctor < ApplicationRecord
  has_secure_password

  belongs_to :department
  has_many :appointments, dependent: :nullify
  has_many :patients, through: :appointments

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
end
