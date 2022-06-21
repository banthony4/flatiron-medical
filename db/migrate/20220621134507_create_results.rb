class CreateResults < ActiveRecord::Migration[7.0]
  def change
    create_table :results do |t|
      t.integer :WBC
      t.integer :RBC
      t.integer :hemoglobin
      t.integer :hematocrit
      t.integer :platelets
      t.integer :sodium
      t.integer :potassium
      t.integer :bun
      t.integer :calcium
      t.references :patient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
