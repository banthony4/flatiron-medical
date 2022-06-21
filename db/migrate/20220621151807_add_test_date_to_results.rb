class AddTestDateToResults < ActiveRecord::Migration[7.0]
  def change
    add_column :results, :test_date, :string
  end
end
