Rails.application.routes.draw do
  devise_for :users
  root to: "menus#top"
  resources :menus, only: [:new, :create]
  get 'menus/:name', controller: 'menus', action: 'index'
end
