Rails.application.routes.draw do
  resources :rooms
  resources :appointments
  resources :doctors
  resources :patients
  resources :departments

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  
end
