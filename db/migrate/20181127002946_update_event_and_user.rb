class UpdateEventAndUser < ActiveRecord::Migration[5.2]
  def change

    remove_column :events, :time
    remove_column :events, :date

    #turning time and date types to strings
    add_column :events, :date, :string
    add_column :events, :time, :string

    add_column :events, :bio, :string
    add_column :events, :image, :string

    remove_column :users, :bio
    remove_column :users, :image

    # add_column :events, :boba_shop, :string
    # remove_column :events, :shop_id

  end
end
