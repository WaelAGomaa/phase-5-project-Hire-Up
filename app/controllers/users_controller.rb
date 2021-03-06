class UsersController < ApplicationController
    
    skip_before_action :authorized, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        @users = User.all
        render json: @users
    end

    def create
        user = User.create!(user_params)
        render json: user
    end

    def show
        render json: @current_user
    end




    def get_receiver
        receiver = User.find(params[:id])
        render json: receiver, status: :ok
    end

    def update
        current_user = User.find(params[:id])
        current_user.update!(user_params)
        render json: current_user, status: :ok
    end
    def destroy
        current_user = User.find(params[:id])
        current_user.destroy
        head :no_content
    end

    # scope :between, -> (user_a_id,user_b_id) do
    #     where((conversations.user_a_id =  AND conversations.user_b_id =)
    #      OR (conversations.user_a_id =  AND conversations.user_b_id =)
    #      , user_a_id,user_b_id, user_a_id, user_b_id)
    #     end
    # end
        
    private

    def user_params
        params.permit(:username, :password, :email, :industry, :first_name, :last_name,  :company, :pronouns, :talent, :instagram, :picture, :bio, :age, :phone_number)
    end

    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end

#  :first_name, :last_name,  :company, :pronouns, :talent, :instagram, :picture, :bio, :age, :phone_number