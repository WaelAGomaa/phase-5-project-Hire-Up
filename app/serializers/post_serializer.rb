class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user_id, :comments, :user
  belongs_to :user , attributes: [:id, :username, :email, :picture]
  has_many :comments , attributes: [:id, :text, :user_id, :post_id, :user]
end
