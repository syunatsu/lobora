FactoryBot.define do
  factory :menu do
    name        {Faker::Name.initials(number: 5)}
    explain     {Faker::Lorem.characters(number: 100)}
    recipe      {Faker::Lorem.characters(number: 100)}
    how_to      {Faker::Lorem.characters(number: 100)}
    price       {Faker::Number.number(digits: 4)}
    category_id {Faker::Number.between(from: 1, to: 3)}
    association :user

    after(:build) do |article|
      article.image.attach(io: File.open('public/images/test_image.png'), filename: 'test_image.png')
    end
  end
end
