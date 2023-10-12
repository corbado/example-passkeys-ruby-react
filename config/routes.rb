Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  match "/api/profile", to: "pages#api_profile", via: :get
  match "/manifest.json", to: "pages#manifest", via: :get
  match "/", to: "pages#home", via: :get
  match "*path", to: "pages#home", via: :get
end
