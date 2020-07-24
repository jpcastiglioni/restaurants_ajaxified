Rails.application.routes.draw do
  # root to: 'pages#home'
  root to: 'restaurants#index'
  resources :restaurants, only: [ :index, :show ] do
    resources :reviews, only: :create
  end
end
