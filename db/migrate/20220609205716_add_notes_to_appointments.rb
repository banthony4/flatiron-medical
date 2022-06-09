class AddNotesToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :notes, :string
  end
end
