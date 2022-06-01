class ConversationsController < ApplicationController
    before_action do
        @conversation = Conversation.find(params[:conversation_id])
        end
        
    def create

        if Conversation.between(params[:user_a_id],params[:user_b_id]).present?
        @conversation = Conversation.between(params[:user_a_id],params[:user_b_id]).first

            else

            @conversation = Conversation.create!(conversation_params)

            end

            render json: @conversation, status: :ok

        end 

        def user_index
            user_conversations = Conversation.where(user_a_id:params[:user_id]).or(Conversation.where(user_b_id:params[:user_id]))
            render json: user_conversations, status: :ok
            end

        private

        def conversation_params
        params.permit(:user_a_id,:user_b_id)
        end
end
