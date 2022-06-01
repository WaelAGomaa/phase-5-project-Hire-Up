class Message < ApplicationRecord
    belongs_to :conversation
    belongs_to :user

    def message_notification
        {"id" => self.id, "sender_id"=> self.sender_id, "sender_name" => self.sender.username, "type" => 'message'}
    end
end
