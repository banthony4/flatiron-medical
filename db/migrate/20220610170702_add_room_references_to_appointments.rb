class AddRoomReferencesToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_reference :appointments, :room, index: true
  end
end
