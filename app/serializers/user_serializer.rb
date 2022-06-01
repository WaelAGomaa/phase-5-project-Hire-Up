class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :industry , :first_name, :last_name, :company, :pronouns, :talent, :instagram, :picture, :bio, :age, :phone_number
  has_many :posts , only: [:id, :title, :body, :user_id, :comments, :picture, :email , :username]
  has_many :comments , only: [:id, :text, :user_id, :post_id, :user]
end

# :first_name, :last_name, :company, :pronouns, :talent, :instagram, :picture, :bio, :age, :phone_number