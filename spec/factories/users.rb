FactoryBot.define do
  factory :user do
    
    nickname              {'test'}
    email                 {'test@mail'}
    password              {'aaaaaa'}
    password_confirmation {password}
  end
end
