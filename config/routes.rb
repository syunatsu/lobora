Rails.application.routes.draw do
  devise_for :users
  root to: "menus#top"
  resources :menus, only: [:new, :create, :update, :destroy]
  get 'menus/:name', controller: 'menus', action: 'index'
  get 'menus/:id/show', controller: 'menus', action: 'show'
end
