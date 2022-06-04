class CreateConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations do |t|
      t.references :sender, null: false, index: true
      t.references :recipient, null: false, index: true

      t.timestamps
    end
  end
end
# class CreateConversations < ActiveRecord::Migration[6.1]
#   def change
#     create_table :conversations do |t|
#       t.references :sender, null: false, index: true
#       t.references :recipient, null: false, index: true

#       t.timestamps
#     end
#   end
# end
