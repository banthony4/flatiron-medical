class AddImageToDepartments < ActiveRecord::Migration[7.0]
  def change
    add_column :departments, :image, :string
  end
end
