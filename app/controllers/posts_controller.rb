class PostsController < ApplicationController
    def index
        render json: Post.all , include: ['title', 'body'], status: :ok
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = Post.find(params[:id])
        post.update!(post_params)
        render json: post, status: :created
    end

    # DELETE "/users/:id"
    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end
    private 

    def post_params
        params.permit(:title, :body, :user_id)
    end 
end
