class AddImageUrlToDoctors < ActiveRecord::Migration[7.0]
  def change
    add_column :doctors, :image_url, :string
  end
end
