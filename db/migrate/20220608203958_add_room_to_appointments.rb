class AddRoomToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :location, :string
  end
end
