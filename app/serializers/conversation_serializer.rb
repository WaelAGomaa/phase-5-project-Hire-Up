class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :user_a, :user_b, :last_message

  def user_a_name
    return User.find(self.object.user_a_id).name
  end

  def user_b_name
    return User.find(self.object.user_b_id).name
  end

  def last_message
    msg_body = self.object.messages.last.body
    msg_sender = User.find(self.object.messages.last.user_id).name
    return {:body => msg_body,:sender => msg_sender}
  end
  
end
