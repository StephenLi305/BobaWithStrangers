class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.date :date, null: false
      t.time :time, null: false
      t.integer :host_id, null: false
      t.integer :shop_id, null: false
      t.integer :max_cap, null: false

      t.timestamps
    end
    add_column :users, :bio, :string
    add_column :users, :image, :string
  end
end
