class User < ApplicationRecord
    has_secure_password
    # messages relationship
    # has_many :messagee, foreign_key: :receiver_id, class_name: 'Message'  
    # has_many :senders, through: :messagee
    # has_many :messaged, foreign_key: :sender_id, class_name: 'Message'
    # has_many :receivers, through: :messaged
    
    # # User relationship "User is employee"
    # has_many :subordinates, class_name: "User", foreign_key: "employer_id"
    # belongs_to :employer, class_name: "User", optional: true
    
    has_many :conversations, :foreign_key => :sender_id
    # User posts
    has_many :posts
    has_many :comments , through: :posts

    
    validates :username, uniqueness: true
    validates :username, :password_digest, presence: true

end
