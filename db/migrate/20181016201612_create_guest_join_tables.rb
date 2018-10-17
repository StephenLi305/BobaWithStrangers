class CreateGuestJoinTables < ActiveRecord::Migration[5.2]
  def change
    create_table :guest_join_tables do |t|
      t.integer :guest_id, null:false
      t.integer :event_id, null:false

      t.timestamps
    end
  end
end
