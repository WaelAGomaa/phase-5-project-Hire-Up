class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :industry
      t.string :company
      t.string :pronouns
      t.string :talent
      t.string :instagram
      t.string :picture
      t.string :bio
      t.integer :age
      t.string :phone_number

      t.timestamps
    end
  end
end
