Rails.application.routes.draw do
  
  resources :messages
  resources :comments
  resources :posts
  resources :users, only: [:create]

  get '/authorized_user', to: 'users#show'


  post "/login", to: "sessions#create"
end
