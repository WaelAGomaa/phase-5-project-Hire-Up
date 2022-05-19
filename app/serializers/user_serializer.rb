class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :industry , :first_name, :last_name, :company, :pronouns, :talent, :instagram, :picture, :bio, :age, :phone_number
end

# :first_name, :last_name, :company, :pronouns, :talent, :instagram, :picture, :bio, :age, :phone_number