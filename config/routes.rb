Rails.application.routes.draw do
  resources :results
  resources :appointments
  resources :doctors
  resources :patients
  resources :departments

  post '/doclogin', to: 'sessions#doclogin'
  post '/patientlogin', to: 'sessions#patientlogin'
  delete '/logout', to: 'sessions#logout'
  
end
