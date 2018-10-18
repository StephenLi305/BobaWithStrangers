Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :update]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:create, :destroy, :update, :show, :index] do
      resources :guest_join_tables, only: [:create]
    end
    resources :guest_join_tables, only: [:destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

end
