Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'universities#index'
  get '/get_data', to: 'universities#get_data'

  resources :universities
end
