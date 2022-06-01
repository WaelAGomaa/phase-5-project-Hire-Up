Rails.application.routes.draw do
  
  resources :conversations, shallow: true do
    resources :messages
    end
  resources :comments, only: [:index, :show, :create, :update, :destroy]
  resources :posts, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  get "/conversations/userindex/:user_id", to: "conversations#user_index"

  # get ‘/conversations/userindex/:user_id’, to: “conversations#user_index”
  post "comments", to: "comments#create"
  get '/authorized_user', to: 'users#show'
  get "/posts/:id/comments", to: "posts#index_comments"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#logout'
  post "/posts/:id/comments", to: "comments#create"  



end
