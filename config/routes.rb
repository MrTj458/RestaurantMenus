Rails.application.routes.draw do
  namespace :api do
    resources :menus do
      resources :items
    end
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
