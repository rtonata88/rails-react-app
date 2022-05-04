Rails.application.routes.draw do
  
  namespace :api, defaults: { format: :json } do
    resources :greetings, only: [:index]
  end

  # Defines the root path route ("/")
   root "greetings#index"
end
