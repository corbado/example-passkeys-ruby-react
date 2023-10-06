Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  match "/login", to: "pages#login", via: :get
  match "/profile", to: "pages#profile", via: :get
  match "/api/profile", to: "pages#api_profile", via: :get
  match "/manifest.json", to: "pages#manifest", via: :get
  match "/logo192.png", to: "pages#logo192", via: :get
end
