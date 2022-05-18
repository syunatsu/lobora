class Category < ActiveHash::Base
  self.data = [
    { id: 0, name: '--'},
    { id: 1, name: 'FOOD'},
    { id: 2, name: 'DOLCE'},
    { id: 3, name: 'DRINK'}
  ]

  include ActiveHash::Associations
  has_many :menus
end