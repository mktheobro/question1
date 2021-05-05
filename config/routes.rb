Rails.application.routes.draw do
  root 'questions#index'
  get 'questions/search'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
