class AddDocToPatients < ActiveRecord::Migration[7.0]
  def change
    add_column :patients, :doc, :boolean
  end
end
