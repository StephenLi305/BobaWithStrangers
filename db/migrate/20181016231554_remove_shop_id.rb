class RemoveShopId < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :shop_id
  end
end
