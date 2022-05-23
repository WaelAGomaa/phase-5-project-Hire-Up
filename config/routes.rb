Rails.application.routes.draw do
  
  resources :messages
  resources :comments
  resources :posts, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  get '/authorized_user', to: 'users#show'


  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#logout'
end
