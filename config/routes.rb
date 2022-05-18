Rails.application.routes.draw do
  devise_for :users
  root to: "menu#index"
  resources :menus, only: [:index]
end
