class Conversation < ApplicationRecord
    belongs_to :user_a, class_name: 'User', :foreign_key => :user_a_id
    belongs_to :user_b, class_name: 'User', :foreign_key => :user_b_id
    has_many :messages, dependent: :destroy
    validates_uniqueness_of :user_a_id, :scope => :user_b_id
end
