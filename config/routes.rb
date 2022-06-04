Rails.application.routes.draw do
  
  resources :conversations, shallow: true do 
    resources :messages
  end
  resources :comments, only: [:index, :show, :create, :update, :destroy]
  resources :posts, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  get '/conversations/userindex/:user_id', to: "conversations#user_index"
  patch '/messages/:id/read', to: "messages#read"
  post "comments", to: "comments#create"
  get '/authorized_user', to: 'users#show'
  get "/posts/:id/comments", to: "posts#index_comments"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#logout'
  post "/posts/:id/comments", to: "comments#create"  
  get "/posts/:id/comments", to: "posts#show_comments" 
  post "/posts/:id/likes", to: "likes#create"
  get "/posts/:id/likes", to: "likes#show"
  get "/posts/:id/comments/:comment_id", to: "posts#show_comment"


end
