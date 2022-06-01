class CreateConversations < ActiveRecord::Migration[6.1]
    def change
      create_table :conversations do |t|
      t.references :user_a, null: false, index: true
      t.references :user_b, null: false, index: true

    t.timestamps
    end
  end
end