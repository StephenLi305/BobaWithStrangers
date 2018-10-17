class MoveShopToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :boba_shop, :string
    add_column :events, :address, :string
    add_column :events, :city, :string
    drop_table :shops
  end
end
