Rails.application.routes.draw do
  resources :appointments
  resources :doctors
  resources :patients
  resources :departments

  post '/doclogin', to: 'sessions#doclogin'
  delete '/logout', to: 'sessions#logout'
  
end
