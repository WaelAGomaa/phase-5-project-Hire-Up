class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user_id
  belongs_to :user
end
