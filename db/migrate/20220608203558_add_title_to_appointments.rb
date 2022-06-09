class AddTitleToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :title, :string
  end
end
