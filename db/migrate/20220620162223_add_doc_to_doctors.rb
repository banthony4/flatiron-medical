class AddDocToDoctors < ActiveRecord::Migration[7.0]
  def change
    add_column :doctors, :doc, :boolean
  end
end
