require 'rails_helper'

RSpec.describe Menu, type: :model do
  before do
    @menu = FactoryBot.build(:menu)
  end

  describe 'メニュー新規投稿' do
    context '投稿できる場合' do
      it 'name, explain, recipe, how_to, price, category_id, imageが正しく入力されていれば投稿できる' do
        expect(@menu).to be_valid
      end
    end
    context '投稿できない場合' do
      it 'nameが空では投稿できない' do
        @menu.name = ''
        @menu.valid?
        expect(@menu.errors.full_messages).to include("Name can't be blank")
      end
      it 'nameが31文字以上では投稿できない' do
        @menu.name = Faker::Lorem.characters(number: 31)
        @menu.valid?
        expect(@menu.errors.full_messages).to include("Name is too long (maximum is 30 characters)")
      end
      it 'explainが空では投稿できない' do
        @menu.explain = ''
        @menu.valid?
        expect(@menu.errors.full_messages).to include("Explain can't be blank")
      end
      it 'explainが251文字以上では投稿できない' do
        @menu.explain = Faker::Lorem.characters(number: 251)
        @menu.valid?
        expect(@menu.errors.full_messages).to include("Explain is too long (maximum is 250 characters)")
      end
      it 'recipeが空では投稿できない' do
        @menu.recipe = ''
        @menu.valid?
        expect(@menu.errors.full_messages).to include("Recipe can't be blank")
      end
      it 'recipeが401文字以上では投稿できない' do
        @menu.recipe = Faker::Lorem.characters(number: 401)
        @menu.valid?
        expect(@menu.errors.full_messages).to include("Recipe is too long (maximum is 400 characters)")
      end
      it 'how_toが空では投稿できない' do
        @menu.how_to = ''
        @menu.valid?
        expect(@menu.errors.full_messages).to include("How to can't be blank")
      end
      it 'how_toが1001文字以上では投稿できない' do
        @menu.how_to = Faker::Lorem.characters(number: 1001)
        @menu.valid?
        expect(@menu.errors.full_messages).to include("How to is too long (maximum is 1000 characters)")
      end
      it 'priceが空では投稿できない' do
        @menu.price = ''
        @menu.valid?
        expect(@menu.errors.full_messages).to include("Price can't be blank")
      end
      it 'priceが半角数字以外では投稿できない' do
        @menu.price = '１０００'
        @menu.valid?
        expect(@menu.errors.full_messages).to include("Price is invalid")
      end
      it 'category_idが空では投稿できない' do
        @menu.category_id = ''
        @menu.valid?
        expect(@menu.errors.full_messages).to include("Category can't be blank")
      end
      it 'category_idが1から3の数字以外では投稿できない' do
        @menu.category_id = 0
        @menu.valid?
        expect(@menu.errors.full_messages).to include("Category can't be blank")
      end
      it 'imageが空では投稿できない' do
        @menu.image = nil
        @menu.valid?
        expect(@menu.errors.full_messages).to include("Image を1枚添付してください")
      end
      it 'userと紐づいていなければ投稿できない' do
        @menu.user = nil
        @menu.valid?
        expect(@menu.errors.full_messages).to include("User must exist")
      end
    end
  end
end
