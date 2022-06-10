class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.string :text
      t.string :color

      t.timestamps
    end
  end
end
