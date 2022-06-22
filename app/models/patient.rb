class Patient < ApplicationRecord
  has_secure_password

  has_many :appointments, dependent: :nullify
  has_many :doctors, through: :appointments
  has_many :results

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validates :age, numericality: { greater_than_or_equal_to: 18 }
  validate :permitted_emails

  def permitted_emails
    unless email.match?(/gmail.com|yahoo.com|icloud.com/)
        errors.add(:permitted_emails, ": Sorry, that email isn't permitted. Must be gmail, yahoo, or icloud.")
    end
  end 

end
